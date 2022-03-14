import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', 'double click for enter text...'))

    }

    return (
        <div className={s.container}>
            <div className={s.h2Container}>
                <h2>homeworks 6</h2>
            </div>

            {/*should work (должно работать)*/}
            <div className={s.itemsContainer}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'double click for enter text...'}}
                />
                <div className={s.buttons}>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
