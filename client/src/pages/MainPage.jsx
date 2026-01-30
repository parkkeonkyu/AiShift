import React from 'react';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Product/ProductCard';
import EventCarousel from '../components/Event/EventCarousel';
import './MainPage.css';
import tabUltraImg from '../assets/tab_s9_ultra.png';
import tabPlusImg from '../assets/tab_s9_plus.png';
import tabBaseImg from '../assets/tab_s9.png';
import tabletImg from '../assets/tablet.png'; // Used as fallback for FE/Lite
import ereaderImg from '../assets/ereader.png';
import accessoriesImg from '../assets/accessories.png';

const dummyProducts = [
    { id: 1, name: 'Visang Tab S9 Ultra', description: '최고의 성능을 자랑하는 프리미엄 태블릿', price: 1590000, image: tabUltraImg },
    { id: 2, name: 'Visang Tab S9+', description: '균형 잡힌 성능과 휴대성', price: 1250000, image: tabPlusImg },
    { id: 3, name: 'Visang Tab S9', description: '강력한 성능의 컴팩트 태블릿', price: 990000, image: tabBaseImg },
    { id: 4, name: 'Visang Tab FE', description: '가성비 최고의 선택', price: 650000, image: 'https://placehold.co/300x200/98FB98/333?text=Visang+Tab+FE+(Mint)' },
    { id: 5, name: 'Visang Tab Lite', description: '가볍고 편리한 데일리 태블릿', price: 450000, image: tabletImg },
    { id: 6, name: 'Visang Book Reader', description: '눈이 편안한 전자책 리더기', price: 250000, image: ereaderImg },
    { id: 7, name: 'Stylus Pen Pro', description: '정교한 드로잉을 위한 전문가용 펜', price: 120000, image: 'https://placehold.co/300x200/eee/333?text=Stylus+Pen' },
    { id: 8, name: 'Keybard Cover', description: '생산성을 높여주는 키보드 커버', price: 180000, image: accessoriesImg },
];

const MainPage = () => {
    return (
        <Layout>
            <EventCarousel />

            <div className="container section">
                <h3 className="section-title">추천 상품</h3>
                <div className="product-grid">
                    {dummyProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default MainPage;
