import React from 'react'
import s from './Junior.module.css'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";

function Junior() {
    return (
        <div className={s.container}>
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
        </div>
    )
}

export default Junior

// сделайте по аналогии пустые страницы Junior и Junior+
// туда будут добавляться следующие дз - 7-11 для Junior и 12 для Junior+