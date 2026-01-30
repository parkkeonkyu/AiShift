import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock Login Logic
        if (email && password) {
            alert(`환영합니다, ${email}님!`);
            navigate('/'); // Redirect to Main Page
        } else {
            alert('이메일과 비밀번호를 입력해주세요.');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">로그인</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@visang.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호 입력"
                        required
                    />
                </div>
                <button type="submit" className="login-btn">로그인</button>
            </form>
            <div className="login-links">
                <span>아이디 찾기</span>
                <span>|</span>
                <span>비밀번호 찾기</span>
                <span>|</span>
                <span>회원가입</span>
            </div>
        </div>
    );
};

export default LoginPage;
