import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import s from './Junior.module.css'

function Junior() {
    return (
        <div className={s.container}>
            <HW7/>
            <HW8/>
        </div>
    )
}

export default Junior

// сделайте по аналогии пустые страницы Junior и Junior+
// туда будут добавляться следующие дз - 7-11 для Junior и 12 для Junior+