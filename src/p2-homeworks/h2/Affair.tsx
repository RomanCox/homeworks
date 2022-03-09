import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
        console.log(props.affair._id)
    }// need to fix
    const priorityStyle = `${s.priority}
    ${props.affair.priority === 'high' ? s.high : props.affair.priority === 'low' ? s.low : s.middle}`

    return (
        <div className={s.container}>
            <div className={s.title}>{props.affair.name}</div>
            <div className={s.button}>
                {/*<button onClick={deleteCallback}>X</button>*/}
                <SuperButton onClick={deleteCallback} size={'small'} red>X</SuperButton>
            </div>
            <div className={priorityStyle}>{props.affair.priority}</div>


        </div>
    )
}

export default Affair
