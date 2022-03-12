import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
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

    const checkboxStyle = `${style.inputCheckbox} ${className ? className : ''}`
    const labelStyle = `${style.label} ${checked ? style.labelChecked : ''}`

    return (

        <div className={style.container}>
            <label className={labelStyle}>
                <input type="checkbox" className={checkboxStyle}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeCallback(event)}
                       checked={checked}

                       {...restProps} // отдаём input остальные пропсы если они есть (checked например там внутри)
                />
                {children && <span>{children}</span>}
            </label> {/*благодаря label нажатие на span передастся в input*/}
        </div>
    )
}

export default SuperCheckbox
