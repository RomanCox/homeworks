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
        /*...restProps*/
    }
) => {
    const [listActive, setListActive] = useState<boolean>(false)

    const barStyle = `${s.bar} ${listActive ? s.barActive : ''}`

    const listStyle = `${s.optionContainer} ${listActive ? s.optionContainerOn : s.optionContainerOff}`

    const mappedOptions: any[] = options ? options.map((o, i) => (
            /*<option key={o + '-' + i} className={s.option} value={o}>{o}</option>*/
            <div className={listStyle}>
                <div key={o + '-' + i} className={s.option}>{o}</div>
                <span className={s.barOption}>{}</span>
            </div>
        )
    ) : [] // map options with key

    const onClickCallback = (/*e: MouseEventHandler<HTMLDivElement>*/) => {
        /*onChange
        && onChange(e)
        onChangeOption
        && onChangeOption(e)*/
        setListActive(!listActive)
    }

    return (
        <div className={s.container}>
                <div className={s.select} onClick={onClickCallback}>{value}</div>
                <span className={barStyle}>{}</span>
            {/*<div className={listStyle}>
                {mappedOptions}
            <div className={s.option} /*value={o}></div>
            </div>*/}

        </div>
    )
}

export default SuperSelect
