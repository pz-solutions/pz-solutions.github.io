import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>PZ Solutions</h1>
        <p>Zarządzanie projektami IT &middot; Tworzenie oprogramowania na zamówienie &middot; Doradztwo&nbsp;IT</p>
    </header>
)

export default Header
