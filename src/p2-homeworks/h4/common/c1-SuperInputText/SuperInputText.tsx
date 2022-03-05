import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'
import style from './MyInputText.module.css'

// тип пропсов обычного input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего input будут такие же пропсы как у обычного input
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном input
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    errorInput?: boolean
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип input
        onChange, onChangeText,
        onKeyPress, onEnter,
        error, errorInput,
        className, spanClassName,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    //const finalInputClassName = `${s.errorInput} ${className}` // need to fix with (?:) and s.superInput
    const finalInputClassName = `${errorInput ? style.barError : style.bar}`

    const barClassName = `${errorInput ? style.barError : style.bar}`
    const inputClassName = `${errorInput ? style.inputError : style.input}`

    return (
        <>
            <div className={style.group}>
                <input
                    type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    /*className={finalInputClassName}*/
                    className={inputClassName}
                    required

                    {...restProps} // отдаём input остальные пропсы если они есть (value например там внутри)
                />
                <span className={barClassName}/>
                <label className={style.label}>Введите текст</label>
            </div>
            {errorInput && <span className={finalSpanClassName}>{'Error'}</span>}
        </>
    )
}

export default SuperInputText
