import React from "react";
import '../styles/main.scss';
import logo from '../Assets/Images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header__logo"/>
            <nav>
                <a href="/" className="header__nav-item">Inicio</a>
                <a href="/about" className="header__nav-item">Nosotros</a>
            </nav>
        </header>
    );
     
};

export default Header;