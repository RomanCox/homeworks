import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
    setUsers: (users: Array<UserType>) => void;
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, setUsers}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any
    const [display, setDisplay] = useState<string>('0')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const correctName = e.currentTarget.value.trim()
        if (correctName) { // need to fix
            setName(correctName)
            setError(false)
            /*setDisplay(JSON.stringify(totalUsers))*/
        } else {
            setName('')
            setError(true)
            setDisplay('name is require!')
        }
    }
    const addUser = () => {
        if (name) {
            setName('')
            addUserCallback(name)
            alert(`Hello ${name} !`) // need to fix
            setDisplay(JSON.stringify(totalUsers+1))
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setUsers={setUsers}
            display={display}
            setDisplay={setDisplay}
            setError={setError}
        />
    )
}

export default GreetingContainer
