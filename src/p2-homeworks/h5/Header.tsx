import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Navigation";
import s from './Header.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {ClickAwayListener} from '@mui/material';

function Header() {

    const [path, setPath] = useState<string>('')
    const [menu, setMenu] = useState<boolean>(false)

    const activeNavLink = (title: string) => {
        if (path === title) {
            return `${s.buttonActive}`
        } else {
            return ''
        }
    }

    const onClickHandler = (title: string) => {
        setPath(title)
    }

    const clickAwayHandler = () => {
        setMenu(false)
    }

    const menuOnOff = () => {
        setMenu(!menu)
    }

    const menuStyle = `${s.menu} ${menu ? s.menuOn : s.menuOff}`

    const menuActive = `${menu ? s.buttonActive : ''}`

    return (
        <div className={s.container}>
            <ClickAwayListener onClickAway={clickAwayHandler}>
                <div className={s.menuButtonContainer}>
                    <SuperButton onClick={menuOnOff} className={menuActive}>MENU</SuperButton>
                </div>
            </ClickAwayListener>

            <div className={menuStyle}>
                <div className={s.menuList}>
                    <SuperButton onClick={() => onClickHandler('PRE-JUNIOR')}
                                 className={activeNavLink('PRE-JUNIOR')}>
                        {<NavLink to={PATH.PRE_JUNIOR} className={s.navLink}>PRE-JUNIOR</NavLink>}
                    </SuperButton>

                    <SuperButton onClick={() => onClickHandler('JUNIOR')} className={activeNavLink('JUNIOR')}>
                        {<NavLink to={PATH.JUNIOR} className={s.navLink}>JUNIOR</NavLink>}
                    </SuperButton>

                    <SuperButton onClick={() => onClickHandler('JUNIOR+')} className={activeNavLink('JUNIOR+')}>
                        {<NavLink to={PATH.JUNIOR_PLUS} className={s.navLink}>JUNIOR+</NavLink>}
                    </SuperButton>
                </div>
            </div>

        </div>
    )
}

export default Header