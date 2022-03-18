import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'
import AlternativeSuperSelect from "./common/c5-SuperSelect/AlternativeSuperSelect";
import AlternativeSuperRadio from "./common/c6-SuperRadio/AlternativeSuperRadio";

const arr = ['x', 'y', 'z']
const arr1 = [/*'Make a choice', */'x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(/*'Make a choice'*/arr[1])
    const [value1, onChangeOption1] = useState('Make a choice')

    return (
        <div className={s.container}>
            <div className={s.h2Container}>
                <h2>homeworks 7</h2>
            </div>

            {/*should work (должно работать)*/}
            <div className={s.itemsContainer}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />

                <SuperRadio
                    name={'homework #7'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <div className={s.itemsContainer}>
                <AlternativeSuperSelect
                    options={arr1}
                    value={value1}
                    onChangeOption={onChangeOption1}
                    name={'option'}
                />

                <AlternativeSuperRadio
                    name={'homework #7 Alternative'}
                    options={arr1}
                    value={value1}
                    onChangeOption={onChangeOption1}
                />
            </div>

        </div>
    )
}

export default HW7
