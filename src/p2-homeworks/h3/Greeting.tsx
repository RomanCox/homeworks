import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    enterKey: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, enterKey, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error === 'name is require!' ? s.error : ''// need to fix with (?:)
    //const disableButton = name === '' || error === 'name is require!' ? true : false

    return (
    <div className = {s.homework3}>
        <div className = {s.input}>
            <input value={name} onChange={setNameCallback} onKeyDown={enterKey} className={inputClass}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
        <span className={s.errorString}>{error}</span>
    </div>
)
}

export default Greeting
