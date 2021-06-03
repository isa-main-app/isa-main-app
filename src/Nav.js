import React from 'react';
import footerLogo from './footer-logo.svg';

function Nav(props) {
    return (
        <div className="footer-container">
            <div className="logo"><img src={footerLogo} alt="footer-logo"/></div>
            <ul className="footer-nav">
                <li>Партнерам</li>
                <li>Разработчикам</li>
                <li>Вакансии</li>
            </ul>
        </div>
    );
}

export default Nav;