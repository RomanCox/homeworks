import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('');
    const [inputError, setInputError] = useState<boolean>(false);
    let error = text ? '' : 'error';


    const showAlert = () => {
        if (inputError) {
            alert('введите текст...')
        } else {
            setText('')
            alert(text)
        }
    }

    const setTextCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const correctText = e.currentTarget.value.trim()
        if (correctText) { // need to fix
            setText(correctText)
            setInputError(false)
        } else {
            setText('')
            setInputError(true)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    const deleteText = () => {
        setText('')
    }

    return (
        <div className={s.container}>
            <h2>homeworks 4</h2>

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChange={setTextCallback}
                    onEnter={showAlert}
                    error={error}
                    className={s.lightgreen}
                    placeholder={'Введите текст'}
                    inputError={inputError}
                    spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue} // проверьте, работает ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <SuperButton onClick={showAlert}>
                    default
                </SuperButton>

                <SuperButton
                    onClick={deleteText}
                    red // пропсу с булевым значением необязательно указывать true
                    >
                    delete {/*название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
