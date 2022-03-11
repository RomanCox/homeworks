import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Navigation/>

            </HashRouter>
        </div>
    )
}

export default HW5
