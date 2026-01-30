import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <h1>Visang Mall</h1>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#">태블릿</a></li>
                        <li><a href="#">액세서리</a></li>
                        <li><a href="#">이벤트</a></li>
                        <li><a href="#">고객센터</a></li>
                    </ul>
                </nav>
                <div className="user-menu">
                    <a href="#">로그인</a>
                    <a href="#">회원가입</a>
                    <a href="#">장바구니</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
