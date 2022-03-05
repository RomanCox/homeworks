import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    let [errorInput, setErrorInput] = useState<boolean>(false)
    //const error = text ? '' : 'error'

    const showAlert = () => {
        if (text) {
            setErrorInput(true)
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
            setErrorInput(false)
        }
    }

    const onChangeText = (value: string) => {
        if (value.trim()) {
            setText(value)
            setErrorInput(false)
        } else {
            setText('')
            setErrorInput(true)
        }
    }
    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={onChangeText}
                    onEnter={showAlert}
                    errorInput={errorInput}
                    // spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue} // проверьте, работает ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <SuperButton red={false}>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением необязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled={true}>
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
