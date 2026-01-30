import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './ProductDetailPage.css';
import tabUltraImg from '../assets/tab_s9_ultra.png';
import tabPlusImg from '../assets/tab_s9_plus.png';
import tabBaseImg from '../assets/tab_s9.png';
import tabletImg from '../assets/tablet.png';
import ereaderImg from '../assets/ereader.png';
import accessoriesImg from '../assets/accessories.png';

const products = [
    { id: 1, name: 'Visang Tab S9 Ultra', description: '최고의 성능을 자랑하는 프리미엄 태블릿', price: 1590000, image: tabUltraImg, details: '14.6인치 Dynamic AMOLED 디스플레이, Snapdragon 8 Gen 2, 16GB RAM' },
    { id: 2, name: 'Visang Tab S9+', description: '균형 잡힌 성능과 휴대성', price: 1250000, image: tabPlusImg, details: '12.4인치 Super AMOLED, Snapdragon 8 Gen 2, 12GB RAM' },
    { id: 3, name: 'Visang Tab S9', description: '강력한 성능의 컴팩트 태블릿', price: 990000, image: tabBaseImg, details: '11인치 LTPS TFT, Snapdragon 8 Gen 2, 8GB RAM' },
    { id: 4, name: 'Visang Tab FE', description: '가성비 최고의 선택', price: 650000, image: 'https://placehold.co/600x400/98FB98/333?text=Visang+Tab+FE', details: '10.5인치 TFT, Exynos 1380, 6GB RAM' },
    { id: 5, name: 'Visang Tab Lite', description: '가볍고 편리한 데일리 태블릿', price: 450000, image: tabletImg, details: '8.7인치 TFT, MediaTek Helio G80, 4GB RAM' },
    { id: 6, name: 'Visang Book Reader', description: '눈이 편안한 전자책 리더기', price: 250000, image: ereaderImg, details: '6.8인치 E Ink Carta 1200, 프론트라이트, 32GB 저장공간' },
    { id: 7, name: 'Stylus Pen Pro', description: '정교한 드로잉을 위한 전문가용 펜', price: 120000, image: 'https://placehold.co/600x400/eee/333?text=Stylus+Pen', details: '4096 압력 레벨, Bluetooth 연결, 자석 부착' },
    { id: 8, name: 'Keyboard Cover', description: '생산성을 높여주는 키보드 커버', price: 180000, image: accessoriesImg, details: '백라이트 키보드, 트랙패드 내장, 다양한 각도 조절' },
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <Layout>
                <div style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2>상품을 찾을 수 없습니다</h2>
                    <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
                        메인으로 돌아가기
                    </button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="product-detail-container">
                <div className="product-detail-content">
                    <div className="product-image-section">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info-section">
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-description">{product.description}</p>
                        <p className="product-details">{product.details}</p>
                        <div className="product-price-big">{product.price.toLocaleString()}원</div>
                        <div className="product-actions">
                            <button className="btn-cart">장바구니</button>
                            <button className="btn-buy">바로 구매</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetailPage;
