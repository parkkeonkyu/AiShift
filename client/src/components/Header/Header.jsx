import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search:', searchQuery);
        // TODO: Implement search functionality
    };

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
                        <li><Link to="/event/1">이벤트</Link></li>
                        <li><Link to="/about">고객센터</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="상품 검색"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button">
                            🔍
                        </button>
                    </form>

                    <div className="user-menu">
                        <Link to="/cart" className="icon-link" title="장바구니">
                            🛒
                        </Link>
                        <Link to="/login" className="icon-link" title="로그인">
                            👤
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
