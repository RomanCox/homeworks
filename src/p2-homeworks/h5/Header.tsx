import React, {useState} from 'react'
import {NavLink, Route} from "react-router-dom";
import {PATH} from "./Navigation";
import s from './Header.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import PreJunior from "./pages/PreJunior";

function Header() {

    const [menu, setMenu] = useState<boolean>(false)

    const menuOnOff = () => {
        setMenu(!menu)
    }

    const onClickHandler = () => {
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
    }

    const menuStyle = `${s.menu} ${menu ? s.menuOn : s.menuOff}`

    return (
        <div className={s.container}>
            <h1>react homeworks:</h1>

            <div className={menuStyle}>
                <div className={s.menuList}>
                    <SuperButton onClick={onClickHandler}>{<NavLink to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>}</SuperButton>
                    <SuperButton>{<NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>}</SuperButton>
                    <SuperButton>{<NavLink to={PATH.JUNIOR_PLUS}>JUNIOR+</NavLink>}</SuperButton>
                </div>
            </div>

            <SuperButton onClick={menuOnOff}>MENU</SuperButton>
        </div>
    )
}

export default Header