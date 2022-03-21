import React from 'react'
import s from './HW10.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {CircularProgress} from "@mui/material";

function HW10() {
    // useSelector, useDispatch
    const loading = false

    const setLoading = () => {
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div className={s.container}>
            <div className={s.h2Container}>
                <h2> homeworks 10</h2>
            </div>
            {/*should work (должно работать)*/
            }
            {
                loading
                    ? (
                        <div><CircularProgress color="success"/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading} size={"big"}>set loading...</SuperButton>
                        </div>
                    )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/
            }
            {/*<Alternative/>*/
            }
            <hr/>
        </div>
    )
}

export default HW10
