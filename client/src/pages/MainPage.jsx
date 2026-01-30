import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Product/ProductCard';
import EventCarousel from '../components/Event/EventCarousel';
import './MainPage.css';
import tabUltraImg from '../assets/tab_s9_ultra.png';
import tabPlusImg from '../assets/tab_s9_plus.png';
import tabBaseImg from '../assets/tab_s9.png';
import tabletImg from '../assets/tablet.png';
import tabFeImg from '../assets/tab_fe.svg';
import ereaderImg from '../assets/ereader.png';
import stylusPenImg from '../assets/stylus_pen.svg';
import accessoriesImg from '../assets/accessories.png';

const allProducts = [
    { id: 1, name: 'Visang Tab S9 Ultra', description: '최고의 성능을 자랑하는 프리미엄 태블릿', price: 1590000, image: tabUltraImg, category: 'tablet' },
    { id: 2, name: 'Visang Tab S9+', description: '균형 잡힌 성능과 휴대성', price: 1250000, image: tabPlusImg, category: 'tablet' },
    { id: 3, name: 'Visang Tab S9', description: '강력한 성능의 컴팩트 태블릿', price: 990000, image: tabBaseImg, category: 'tablet' },
    { id: 4, name: 'Visang Tab FE', description: '가성비 최고의 선택', price: 650000, image: tabFeImg, category: 'tablet' },
    { id: 5, name: 'Visang Tab Lite', description: '가볍고 편리한 데일리 태블릿', price: 450000, image: tabletImg, category: 'tablet' },
    { id: 6, name: 'Visang Book Reader', description: '눈이 편안한 전자책 리더기', price: 250000, image: ereaderImg, category: 'ereader' },
    { id: 7, name: 'Stylus Pen Pro', description: '정교한 드로잉을 위한 전문가용 펜', price: 120000, image: stylusPenImg, category: 'accessory' },
    { id: 8, name: 'Keyboard Cover', description: '생산성을 높여주는 키보드 커버', price: 180000, image: accessoriesImg, category: 'accessory' },
];

const MainPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: '전체', count: allProducts.length },
        { id: 'tablet', name: '태블릿', count: allProducts.filter(p => p.category === 'tablet').length },
        { id: 'accessory', name: '액세서리', count: allProducts.filter(p => p.category === 'accessory').length },
        { id: 'ereader', name: '전자책 리더기', count: allProducts.filter(p => p.category === 'ereader').length },
    ];

    const filteredProducts = selectedCategory === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === selectedCategory);

    return (
        <Layout>
            <div className="main-page">
                {/* Event Carousel */}
                <EventCarousel />

                {/* Best Products Section */}
                <div className="section" style={{ background: 'white' }}>
                    <div className="container">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">🏆 인기 상품 BEST</h2>
                                <p className="section-subtitle">가장 많이 선택한 비상기어</p>
                            </div>
                        </div>
                        <div className="product-grid">
                            {allProducts.slice(0, 4).map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Products with Category Filter */}
                <div className="section category-section">
                    <div className="container">
                        <h2 className="section-title">전체 상품</h2>

                        <div className="category-filters">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    {cat.name}
                                    <span className="count">({cat.count})</span>
                                </button>
                            ))}
                        </div>

                        <div className="product-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MainPage;
