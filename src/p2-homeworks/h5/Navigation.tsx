import React from 'react'
import {Navigate, Routes, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Navigation() {
    return (
        <div>
            {/*Switch выбирает первый подходящий route*/}
            <Routes>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен, чтобы указать полное совпадение (что после '/' ничего не будет)*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Error404/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<Error404/>}/>
                {/*у этого route нет пути, он отрисуется, если пользователь захочет попасть на несуществующую страницу*/}
                <Route path='*' element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Navigation
