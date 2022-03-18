import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './MyRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[],
    onChangeOption?: (option: string) => void,
    className?: string
}

const   SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)
        onChangeOption
        && onChangeOption(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const radioStyle = `${s.inputCheckbox} ${s.radio} ${className}`


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={`${s.label} ${o === value ? s.labelChecked : ''}`}>
            <input
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
                className={radioStyle}
                // name, checked, value, onChange
                {...restProps}
            />
            {o}
        </label>
    )) : [] // map options with key

    return (
        <div className={s.container}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
