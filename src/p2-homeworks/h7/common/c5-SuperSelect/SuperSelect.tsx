import React, {SelectHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import s from './MySelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[],
    onChangeOption?: (option: string) => void,
    value?: string,
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    /*const mappedOptions: any[] = options ? options.map((o, i: number) => (
        <option key={o + '-' + i} className={s.option} value={o}>{o}</option>
    )) : []*/ // map options with key

    const [listActive, setListActive] = useState<boolean>(false)

    const onClickCallback = (/*e: MouseEventHandler<HTMLDivElement>*/) => {
        /*onChange
        && onChange(e)
        onChangeOption
        && onChangeOption(e)*/
        setListActive(!listActive)
    }
    console.log(listActive)

    const barStyle = `${s.bar} ${listActive ? s.barActive : ''}`

    const listStyle = `${s.option} ${listActive ? s.optionOn : s.optionOff}`

    return (
        <div className={s.container}>

            <div className={s.select} onClick={onClickCallback}>{}</div>
            <span className={barStyle}>{}</span>
            <label className={s.label}>{value}</label>

            {/*<div className={listStyle}>
                {mappedOptions}
            <div className={s.option} /*value={o}></div>
            </div>*/}
        </div>
    )
}

export default SuperSelect
