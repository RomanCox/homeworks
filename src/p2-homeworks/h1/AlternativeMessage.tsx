import React from 'react'
import s from './AlternativeMessage.module.css'

type AlternativeMessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div>
            <div className={s.wrapper}>
                <img className={s.avatar} src={props.avatar} alt="User"/>
                <div className={s.content}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
