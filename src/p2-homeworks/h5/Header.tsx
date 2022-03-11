import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Navigation";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>JUNIOR+</NavLink>
        </div>
    )
}

export default Header