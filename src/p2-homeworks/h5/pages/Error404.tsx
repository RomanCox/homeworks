import React from 'react'
import s from './Error404.module.css'
import error from './404.png'

function Error404() {
    return (
        <div className={s.container}>
            <img src={error} alt={'error404'}/>
        </div>
    )
}

export default Error404
