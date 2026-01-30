import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>Visang Mall</h2>
                    </div>
                    <div className="footer-links">
                        <a href="#">회사소개</a>
                        <a href="#">이용약관</a>
                        <a href="#">개인정보처리방침</a>
                        <a href="#">청소년보호정책</a>
                    </div>
                    <p className="copyright">
                        © 2026 Visang Mall. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
