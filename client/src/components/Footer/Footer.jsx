import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>비상기어</h2>
                        <p className="footer-logo-sub">VISANG GEAR</p>
                    </div>
                    <div className="footer-links">
                        <Link to="/about">회사소개</Link>
                        <Link to="/terms">이용약관</Link>
                        <Link to="/privacy">개인정보처리방침</Link>
                        <Link to="/youth-policy">청소년보호정책</Link>
                    </div>
                    <p className="copyright">
                        © 2026 Visang Gear (비상기어). All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
