import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import EventDetailPage from './pages/EventDetailPage';
import AboutPage from './pages/Footer/AboutPage';
import TermsPage from './pages/Footer/TermsPage';
import PrivacyPage from './pages/Footer/PrivacyPage';
import YouthPolicyPage from './pages/Footer/YouthPolicyPage';
import AdminPage from './pages/Admin/AdminPage';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/youth-policy" element={<YouthPolicyPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
