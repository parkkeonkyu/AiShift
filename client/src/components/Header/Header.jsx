import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <div className="logo-container">
                            <span className="logo-icon">⚙</span>
                            <div className="logo-text">
                                <h1 className="logo-main">비상기어</h1>
                                <span className="logo-sub">VISANG GEAR</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><Link to="/product/tablet">태블릿</Link></li>
                        <li><Link to="/product/accessories">액세서리</Link></li>
                        <li><Link to="/event/all">이벤트</Link></li>
                        <li><Link to="/customer">고객센터</Link></li>
                    </ul>
                </nav>
                <div className="user-menu">
                    <Link to="/login">로그인</Link>
                    <Link to="/join">회원가입</Link>
                    <Link to="/cart">장바구니</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
