import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './MySelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[],
    onChangeOption?: (option: string) => void,
    className?: string,
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, className,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options ? options.map((o, i) => (
            <option key={o + '-' + i} className={s.option} value={o}>{o}</option>
        )
    ) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange
        && onChange(e)
        onChangeOption
        && onChangeOption(e.currentTarget.value)
    }

    const finalSelectClassName = s.select + (
        className
            ? ' ' + className
            : ''
    )

    return (
            <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>{mappedOptions}</select>
    )
}

export default SuperSelect
