import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './MyButton.module.css'

export type ButtonsSizeType = 'small' | 'big'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean;
    disabled?: boolean;
    size?: ButtonsSizeType;
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, disabled, size,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    /*const finalClassName = `${red ? s.red : s.default} ${className}`*/
    const finalClassName = `${style.button} ${className}
    ${red ? style.red : disabled ? style.disable : ''}
    ${size==='small' ? style.small : size==='big' ? style.big : ''}`

    return (
        <button
            className={finalClassName}
            disabled={disabled}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
