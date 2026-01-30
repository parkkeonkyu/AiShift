import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <h2>비상기어</h2>
                            <p className="footer-logo-sub">VISANG GEAR</p>
                            <p className="footer-tagline">학습을 위한 최고의 선택</p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">고객센터</h3>
                        <div className="customer-service">
                            <p className="cs-phone">📞 1588-0554</p>
                            <p className="cs-hours">평일 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
                            <p className="cs-email">📧 support@visanggear.com</p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">서비스</h3>
                        <div className="footer-links">
                            <Link to="/about">회사소개</Link>
                            <Link to="/terms">이용약관</Link>
                            <Link to="/privacy">개인정보처리방침</Link>
                            <Link to="/youth-policy">청소년보호정책</Link>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">팔로우</h3>
                        <div className="social-links">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">📘</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">📺</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">🐦</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © 2026 Visang Gear (비상기어). All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
