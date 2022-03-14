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
                <h2>homeworks 7</h2>
            {/*should work (должно работать)*/}
            <div className={s.selectContainer}>
                <SuperSelect
                    options={arr1}
                    value={value1}
                    onChangeOption={onChangeOption1}
                />
            </div>
            <div className={s.radioContainer}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
