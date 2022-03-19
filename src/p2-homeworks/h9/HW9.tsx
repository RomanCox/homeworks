import React from 'react'
import Clock from './Clock'
import s from './HW9.module.css'

function HW9() {
    return (
        <div className={s.container}>
            <div className={s.h2Container}>
                <h2>homeworks 9</h2>
            </div>
            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
