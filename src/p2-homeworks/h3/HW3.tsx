import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './HW3.module.css'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any
    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: v1(), name}]) // need to fix
    }

    return (
        <div className={s.container}>
            <h2>homeworks 3</h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} setUsers={setUsers}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
