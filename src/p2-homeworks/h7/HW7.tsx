import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'

const arr = ['x', 'y', 'z']
const arr1 = ['x']

function HW7() {
    const [value, onChangeOption] = useState<string>('Make a choice')
    const [value1, onChangeOption1] = useState<string>('Make a choice')

    return (
        <div className={s.container}>
            <div className={s.h2Container}>
                <h2>homeworks 7</h2>
            </div>

            {/*should work (должно работать)*/}
            <div className={s.itemsContainer}>
                <SuperSelect
                    options={arr1}
                    value={value1}
                    onChangeOption={onChangeOption1}
                />

                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

        </div>
    )
}

export default HW7
