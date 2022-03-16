import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import style from './Alternative2Select.module.css'

/*type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>*/
type DefaultSelectPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: any[]
    onChangeOption: (option: string) => void,
    value?: string,
    name?: string,
}

const AlternativeSuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value, name,
        onChange, onChangeOption,
    }
) => {
    const [listActive, setListActive] = useState<boolean>(false)

    const onClickCallback = () => {
        /*onChange && onChange()
        onChangeOption && onChangeOption(e)*/
        setListActive(!listActive)
    }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)
        onChangeOption
        && onChangeOption(e.currentTarget.value)
        setListActive(false)
        console.log(e.currentTarget.value)
    }

    console.log(value)

    const selectStyle = `${style.select} ${listActive ? style.selectActive : ''}`
    const selectInputStyle = `${style.selectInput} ${listActive ? style.selectInputActive : ''}`
    const selectBarStyle = `${style.selectBar} ${listActive ? style.selectBarActive : ''}`

    const mappedOptions: any[] = options ? options.map((o, i) => (
            /*<option key={o + '-' + i} className={s.option} value={o}>{o}</option>*/
            <div className={style.selectContent}>
                <input
                    key={o + '-' + i}
                    id={'option'}
                    className={selectInputStyle}
                    type={'radio'}
                    name={name}
                    value={o}
                    onChange={onChangeCallback}
                />
                <label htmlFor={'option'} className={style.selectLabel}>{o}</label>
            </div>
        )
    ) : [] // map options with key

    return (
        <div className={selectStyle} onClick={onClickCallback}>
            <div className={style.selectTitle}>{value}</div>
            <span className={selectBarStyle}>{}</span>
            {mappedOptions}
            {/*<div className={style.selectContent}>
                <input
                    id={'option'}
                    className={selectInputStyle}
                    type={'radio'}
                    name={name}
                    onChange={onChangeCallback}
                    value={options[0]}
                />
                <label htmlFor={'option'} className={style.selectLabel}>{options[0]}</label>

                <input
                    id={'option'}
                    className={selectInputStyle}
                    type={'radio'}
                    name={name}
                    onChange={onChangeCallback}
                    value={options[1]}
                />
                <label htmlFor={'option'} className={style.selectLabel}>
                    <span className={style.optionBar}>{options[1]}</span>
                </label>

                <input
                    id={'option'}
                    className={selectInputStyle}
                    type={'radio'}
                    name={name}
                    onChange={onChangeCallback}
                    value={options[2]}
                />
                <label htmlFor={'option'} className={style.selectLabel}>
                    <span className={style.optionBar}>{options[2]}</span>
                </label>

                <input
                    id={'option'}
                    className={selectInputStyle}
                    type={'radio'}
                    name={name}
                    onChange={onChangeCallback}
                    value={options[3]}
                />
                <label htmlFor={'option'} className={style.selectLabel}>
                    <span className={style.optionBar}>{options[3]}</span>
                </label>
            </div>*/}
        </div>
    )


}

export default AlternativeSuperSelect
