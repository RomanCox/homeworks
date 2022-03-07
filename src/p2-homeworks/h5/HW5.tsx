import React, {useState} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import {HashRouter} from "react-router-dom";

function HW5() {

    let [menuActive, setMenuActive] = useState(false)

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
                <Navigation menuActive={menuActive} setMenuActive={setMenuActive}/>
            </HashRouter>
        </div>
    )
}

export default HW5;
