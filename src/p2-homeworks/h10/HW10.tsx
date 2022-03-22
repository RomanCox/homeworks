import React from 'react'
import s from './HW10.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
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
