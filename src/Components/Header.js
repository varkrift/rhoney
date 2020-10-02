import React from 'react'
import logo from '../logo.png';
import basket from '../img/basket.svg';

function Header(props) {
    return (
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="menu">
                    <a href="/">Главная</a>
                    <a href="/catalog">Продукция</a>
                    <a href="/cart" style={{color:"#FFCD5C"}}>
                        <img type="svg+xml" src={basket} alt="basket"></img>
                        Корзина
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;