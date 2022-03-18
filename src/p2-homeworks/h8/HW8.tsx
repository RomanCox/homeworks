import React, {useState} from 'react'
import s from './HW8.module.css'
import {CheckAgeAC, homeWorkReducer, SortStateDownAC, SortStateUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number,
    name: string,
    age: number,
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeopleName = people.map((p: UserType) => (
        <div key={p._id}>
            {p.name}
        </div>
    ))


    const finalPeopleAge = people.map((p: UserType) => (
        <div key={p._id}>
            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortStateUpAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortStateDownAC('down')))
    const check = () => setPeople(homeWorkReducer(initialPeople, CheckAgeAC(18)))

    return (
        <div className={s.container}>
            <div className={s.h2Container}>
                <h2>homeworks 7</h2>
            </div>

            {/*should work (должно работать)*/}
            <div className={s.itemsContainer}>
                <div className={s.itemContainerName}>
                    <div className={s.title}>
                        Name:
                    </div>
                    <hr/>
                    {finalPeopleName}
                </div>
                <div className={s.itemContainerAge}>
                    <div className={s.title}>
                        Age:
                    </div>
                    <hr/>
                    {finalPeopleAge}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check}>check 18</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
