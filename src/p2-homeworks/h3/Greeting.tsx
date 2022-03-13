import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {UserType} from "./HW3";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type GreetingPropsType = DefaultInputPropsType & {
    name: string, // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void, // need to fix any
    addUser: () => void, // need to fix any
    error: boolean, // need to fix any
    totalUsers: number, // need to fix any
    setUsers: (users: Array<UserType>) => void,
    display: string,
    setDisplay: (display: string) => void,
    setError: (error: boolean) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setUsers, display, setDisplay, onBlur, setError} // деструктуризация пропсов
) => {
    const inputClass = `${s.background} ${error ? s.error : ''}`// need to fix with (?:)
    const countStyle = `${s.count} ${error ? s.error : ''}`
    const onClickHandler = () => {
        setUsers([])
    }

    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setError(false)
        setDisplay(JSON.stringify(totalUsers))
        onBlur && onBlur(e)
    }

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <SuperInputText
                    onBlur={onBlurCallback}
                    value={name}
                    onChange={setNameCallback}
                    onEnter={addUser}
                    className={inputClass}
                    placeholder={'Введите имя'}
                    inputError={error}
                />
            </div>
            <div className={s.addContainer}>
                <SuperButton onClick={addUser} disabled={!name}>ADD</SuperButton>
            </div>
            <div className={s.countContainer}>
                <span className={countStyle}>{display}</span>
            </div>
            <div className={s.resetContainer}>
                <SuperButton onClick={onClickHandler} red>RESET</SuperButton>
            </div>
        </div>
    )
}

export default Greeting
