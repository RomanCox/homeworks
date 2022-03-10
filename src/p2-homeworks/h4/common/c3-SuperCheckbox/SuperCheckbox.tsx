import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'
import style from './MyCheckbox.module.css'

// тип пропсов обычного input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void,
    spanClassName?: string,
    checked: boolean,
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип input
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        checked,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        // сделайте так чтоб работал onChange и onChangeChecked
        onChange && onChange(event)
        onChangeChecked && onChangeChecked(event.currentTarget.checked)
    }

    /*const finalInputClassName = `${style.checkbox} ${className ? className : ''}`*/


    return (
        /*<label>
            <input
                type={'checkbox'}
                id={'cbx'}
                onChange={onChangeCallback}
                className={style.checkboxWrapper}

                {...restProps} // отдаём input остальные пропсы если они есть (checked например там внутри)
            />

            {children && <span className={s.spanClassName}>{children}</span>}
        </label> // благодаря label нажатие на span передастся в input*/
        <div className={style.container}>
            <input type="checkbox" id="cbx" className={style.input} onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeCallback(event)} checked={checked}/>
            <label htmlFor="cbx" className={style.check}>
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </label>
        </div>
    )
}

export default SuperCheckbox
