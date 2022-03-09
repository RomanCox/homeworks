import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string, // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void, // need to fix any
    addUser: () => void, // need to fix any
    error: boolean, // need to fix any
    totalUsers: number, // need to fix any
    setUsers: (users: Array<UserType>) => void,
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setUsers} // деструктуризация пропсов
) => {
    const inputClass = `${s.background} ${error ? s.error : ''}`// need to fix with (?:)
    const countStyle = `${s.count} ${error ? s.error : ''}`
    const onClickHandler = () => {
        setUsers([])
    }

    let display: string
    if (error) {
        display = 'name is require!'
    } else {
        display = JSON.stringify(totalUsers)
    }

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <SuperInputText
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
