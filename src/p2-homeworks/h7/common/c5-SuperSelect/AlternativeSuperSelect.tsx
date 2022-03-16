import React, {DetailedHTMLProps, SelectHTMLAttributes, useState} from 'react'
import s from './AlternativeSelect.module.css'
import style from './Alternative2Select.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    /*option: 'x' | 'y' | 'z'*/
    options: any[]
    onChangeOption: (option: string) => void,
    value?: string,
}

const AlternativeSuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
    }
) => {
    const [listActive, setListActive] = useState<boolean>(false)

    const onClickCallback = () => {
        /*onChange && onChange()
        onChangeOption && onChangeOption(e)*/
        setListActive(!listActive)
    }

    const onChangeCallback = (e: MouseEvent, value: string) => {
        onChangeOption(value)
    }

    const barStyle = `${s.bar} ${listActive ? s.barActive : ''}`

    const listStyle1 = `${s.optionContainer} ${s.optionContainerOn} ${listActive ? s.optionContainer1On : s.optionContainerOff}`
    const listStyle2 = `${s.optionContainer} ${s.optionContainerOn} ${listActive ? s.optionContainer2On : s.optionContainerOff}`
    const listStyle3 = `${s.optionContainer} ${s.optionContainerOn} ${listActive ? s.optionContainer3On : s.optionContainerOff}`

    const selectStyle = `${style.select} ${listActive ? style.selectActive : ''}`
    const selectInputStyle = `${style.selectInput} ${listActive ? style.selectInputActive : ''}`
    const selectBarStyle = `${style.selectBar} ${listActive ? style.selectBarActive : ''}`

    return (
        /*<div className={s.mySelectContainer}>
            <div className={s.selectContainer}>
                <div className={s.select}>{value}</div>
                <span className={barStyle}>{}</span>
                <input type='checkbox' id={'select'} name='select' className={s.inputSelect} onClick={onClickCallback} checked={listActive}>{value}</input>
                <label for={'select'}>{value}</label>
            </div>
            <div className={listStyle1}>
                <div className={s.option}>{options[0]}</div>
                <span className={s.barOption}>{}</span>
            </div>
            <div className={listStyle2}>
                <div className={s.option}>{options[1]}</div>
                <span className={s.barOption}>{}</span>
            </div>
            <div className={listStyle3}>
                <div className={s.option}>{options[2]}</div>
                <span className={s.barOption}>{}</span>
            </div>
        </div>*/

        <div className={selectStyle} onClick={onClickCallback}>
            <div className={style.selectTitle}>Make a choice</div>
            <span className={selectBarStyle}>{}</span>
            <div className={style.selectContent}>
                {/*<input id={'select'} className={selectInputStyle} type={'radio'} name={'select'} checked={listActive}/>*/}
                <input id={'select'} className={selectInputStyle} type={'checkbox'} name={'select'} checked={listActive}/>
                <label htmlFor={'select'} className={style.selectLabel}>Make a choice</label>

                <input id={'option1'} className={selectInputStyle} type={'radio'} name={'option'}/>
                <label htmlFor={'option1'} className={style.selectLabel}>
                    <span className={style.optionBar}>X</span>
                </label>

                <input id={'option2'} className={selectInputStyle} type={'radio'} name={'option'}/>
                <label htmlFor={'option2'} className={style.selectLabel}>
                    <span className={style.optionBar}>Y</span>
                </label>

                <input id={'option2'} className={selectInputStyle} type={'radio'} name={'option'}/>
                <label htmlFor={'option2'} className={style.selectLabel}>
                    <span className={style.optionBar}>Z</span>
                </label>
            </div>
        </div>
    )


}

export default AlternativeSuperSelect
