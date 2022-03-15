import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>,
    filter: FilterType,
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (_id: number) => void,
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.container}>
            <div className={s.affairs}>
                {mappedAffairs}
            </div>
            <div className={s.buttons}>
                <SuperButton onClick={setAll} size={'small'}>All</SuperButton>
                <SuperButton onClick={setHigh} className={s.high}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={s.middle}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={s.low}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs