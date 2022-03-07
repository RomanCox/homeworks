import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Navigation";
import s from './Header.module.css';

type NavigationPropsType = {
    menuActive: boolean,
    setMenuActive: (menuActive: boolean) => void,
}

function Header(props: NavigationPropsType) {

    const menuButton = () => {
        props.setMenuActive(!props.menuActive)
    }

    const menuOnOff = `${s.menu} ${props.menuActive ? s.menuOn : s.menuOff}`

    return (
        <div className={s.container}>
                <div className={menuOnOff}>
                    <nav className={s.menuList}>
                        <NavLink to={PATH.PRE_JUNIOR} className={s.menuList}>PRE-JUNIOR</NavLink>
                        <NavLink to={PATH.JUNIOR} className={s.menuList}>JUNIOR</NavLink>
                        <NavLink to={PATH.JUNIOR_PLUS} className={s.menuList}>JUNIOR+</NavLink>
                    </nav>
                    <button className={s.button} onClick={menuButton}>REACT HOMEWORKS</button>
            </div>

            {/*<SuperButton
                        red={false}
                        disabled={false}
                        onClick={menuButton}
                    >
                        REACT HOMEWORKS
                    </SuperButton>*/}
            {/*<div className={s.menuButton}>
                <button className={s.button} onClick={menuButton}>REACT HOMEWORKS</button>
            </div>*/}

        </div>
    )
}

export default Header;
