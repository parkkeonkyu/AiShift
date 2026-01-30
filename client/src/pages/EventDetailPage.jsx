import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './EventDetailPage.css';

const EventDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tradeInValue, setTradeInValue] = useState(0);

    // Event 1: 신학기 아카데미 페스티벌
    const BackToSchoolEvent = () => (
        <div className="event-detail-container">
            <div className="event-banner" style={{ background: 'linear-gradient(135deg, #FF9F43 0%, #FF6B35 100%)' }}>
                <h1>🎒 신학기 아카데미 페스티벌</h1>
                <p>새로운 시작을 위한 최고의 선택!</p>
            </div>
            <div className="event-content">
                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">📱</div>
                        <h3>최대 30% 할인</h3>
                        <p>학습용 태블릿 특가</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📚</div>
                        <h3>학습 앱 1년 무료</h3>
                        <p>프리미엄 교육 콘텐츠</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">✏️</div>
                        <h3>스타일러스 펜 증정</h3>
                        <p>정품 펜 무료 제공</p>
                    </div>
                </div>
                <div className="event-section timeline-section">
                    <h2>📅 이벤트 기간</h2>
                    <p className="timeline">2026년 2월 1일 ~ 2월 29일</p>
                </div>
                <div className="event-coupon gradient-purple">
                    <h3>🎟️ 쿠폰 코드</h3>
                    <div className="coupon-code">BACKTOSCHOOL2026</div>
                    <p className="coupon-note">결제 시 위 코드 입력으로 즉시 할인</p>
                </div>
                <button className="btn-shop" onClick={() => navigate('/')}>쇼핑하러 가기</button>
            </div>
        </div>
    );

    // Event 2: 보상판매 특별전 (Trade-in Calculator)
    const TradeInEvent = () => {
        const calculateTradeIn = (condition) => {
            const values = { excellent: 400000, good: 300000, fair: 200000, poor: 100000 };
            setTradeInValue(values[condition] || 0);
        };

        return (
            <div className="event-detail-container">
                <div className="event-banner" style={{ background: 'linear-gradient(135deg, #54a0ff 0%, #2e86de 100%)' }}>
                    <h1>💰 태블릿 보상판매 특별전</h1>
                    <p>쓰던 기기 반납하고 최대 40만원 추가 할인!</p>
                </div>
                <div className="event-content">
                    <div className="tradein-calculator">
                        <h2>🔄 보상판매 예상 금액 계산</h2>
                        <p>기기 상태를 선택하세요</p>
                        <div className="calculator-buttons">
                            <button onClick={() => calculateTradeIn('excellent')}>최상 (40만원)</button>
                            <button onClick={() => calculateTradeIn('good')}>양호 (30만원)</button>
                            <button onClick={() => calculateTradeIn('fair')}>보통 (20만원)</button>
                            <button onClick={() => calculateTradeIn('poor')}>불량 (10만원)</button>
                        </div>
                        {tradeInValue > 0 && (
                            <div className="tradein-result">
                                <h3>예상 할인 금액</h3>
                                <div className="tradein-amount">{tradeInValue.toLocaleString()}원</div>
                            </div>
                        )}
                    </div>
                    <div className="event-section">
                        <h3>📋 진행 방법</h3>
                        <ol className="process-steps">
                            <li>온라인 또는 매장 방문</li>
                            <li>기존 기기 상태 확인</li>
                            <li>보상 금액 차감 후 결제</li>
                        </ol>
                    </div>
                    <div className="event-coupon gradient-blue">
                        <h3>쿠폰 코드</h3>
                        <div className="coupon-code">TRADEIN2026</div>
                    </div>
                    <button className="btn-shop" onClick={() => navigate('/')}>보상판매 신청하기</button>
                </div>
            </div>
        );
    };

    // Event 3: 액세서리 할인 (Product Grid)
    const AccessoryEvent = () => {
        const accessories = [
            { name: 'Stylus Pen Pro', price: 120000, discount: 60000, image: '✏️' },
            { name: 'Keyboard Cover', price: 180000, discount: 90000, image: '⌨️' },
            { name: '보호 케이스', price: 50000, discount: 25000, image: '🛡️' },
            { name: '화면 보호 필름', price: 30000, discount: 15000, image: '📱' },
        ];

        return (
            <div className="event-detail-container">
                <div className="event-banner" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)' }}>
                    <h1>🎁 액세서리 50% 할인</h1>
                    <p>태블릿과 함께라면 더 완벽한 경험!</p>
                </div>
                <div className="event-content">
                    <h2>🛒 할인 액세서리</h2>
                    <div className="accessory-grid">
                        {accessories.map((item, idx) => (
                            <div key={idx} className="accessory-card">
                                <div className="accessory-icon">{item.image}</div>
                                <h3>{item.name}</h3>
                                <p className="original-price">{item.price.toLocaleString()}원</p>
                                <p className="sale-price">{item.discount.toLocaleString()}원</p>
                                <span className="discount-badge">50% OFF</span>
                            </div>
                        ))}
                    </div>
                    <div className="event-section">
                        <h3>📌 이용 안내</h3>
                        <p>• 태블릿 본체 구매 시 액세서리 50% 할인</p>
                        <p>• 1인당 최대 3개까지 구매 가능</p>
                        <p>• 정품 액세서리만 해당</p>
                    </div>
                    <div className="event-coupon gradient-red">
                        <h3>쿠폰 코드</h3>
                        <div className="coupon-code">ACCESSORY50</div>
                    </div>
                    <button className="btn-shop" onClick={() => navigate('/')}>액세서리 보러가기</button>
                </div>
            </div>
        );
    };

    // Event 4: 멤버십 런칭 (Benefits List)
    const MembershipEvent = () => {
        const benefits = [
            { icon: '🎫', title: '첫 구매 10% 할인', desc: '멤버십 가입 즉시 사용 가능' },
            { icon: '💎', title: '적립금 2배 적립', desc: '모든 구매에서 2% 적립' },
            { icon: '🎉', title: '회원 전용 특가', desc: '매월 멤버십 한정 세일' },
            { icon: '🚚', title: '무료 배송', desc: '금액 상관없이 무료 배송' },
            { icon: '🎁', title: '생일 쿠폰', desc: '생일 축하 할인 쿠폰' },
            { icon: '⚡', title: '신제품 우선 구매', desc: '신상품 사전 예약 기회' },
        ];

        return (
            <div className="event-detail-container">
                <div className="event-banner" style={{ background: 'linear-gradient(135deg, #1dd1a1 0%, #10ac84 100%)' }}>
                    <h1>👑 비상기어 멤버십 런칭</h1>
                    <p>가입 즉시 특별 혜택을 경험하세요</p>
                </div>
                <div className="event-content">
                    <h2>✨ 멤버십 혜택</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="benefit-item">
                                <div className="benefit-icon-large">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="membership-pricing">
                        <h3>💳 멤버십 요금</h3>
                        <p className="price-info">월 9,900원 (연 99,000원)</p>
                        <p className="price-note">* 첫 달 무료 체험</p>
                    </div>
                    <div className="event-coupon gradient-green">
                        <h3>가입 쿠폰</h3>
                        <div className="coupon-code">MEMBERSHIP10</div>
                    </div>
                    <button className="btn-shop btn-primary" onClick={() => navigate('/')}>멤버십 가입하기</button>
                </div>
            </div>
        );
    };

    // Event 5: 베스트 리뷰어 (Review Showcase)
    const ReviewEvent = () => {
        const reviews = [
            { author: '김*수', product: 'Tab S9 Ultra', rating: 5, text: '학습용으로 최고입니다. 화면도 크고 성능도 좋아요!' },
            { author: '이*영', product: 'Stylus Pen', rating: 5, text: '필기감이 실제 펜과 똑같아서 놀랐어요.' },
            { author: '박*민', product: 'Tab FE', rating: 5, text: '가성비 최고! 학생들에게 추천합니다.' },
        ];

        return (
            <div className="event-detail-container">
                <div className="event-banner" style={{ background: 'linear-gradient(135deg, #8395a7 0%, #576574 100%)' }}>
                    <h1>⭐ 이달의 베스트 리뷰어</h1>
                    <p>정성스러운 후기 남기고 선물 받아가세요</p>
                </div>
                <div className="event-content">
                    <h2>🏆 우수 리뷰 사례</h2>
                    <div className="review-showcase">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="review-card">
                                <div className="review-header">
                                    <span className="review-author">{review.author}</span>
                                    <span className="review-rating">{'⭐'.repeat(review.rating)}</span>
                                </div>
                                <p className="review-product">{review.product}</p>
                                <p className="review-text">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                    <div className="event-section">
                        <h3>📝 참여 방법</h3>
                        <ol className="participation-steps">
                            <li>제품 구매 후 리뷰 작성</li>
                            <li>사진 첨부 및 상세한 후기 작성</li>
                            <li>매월 10명 추첨하여 상품권 증정</li>
                        </ol>
                    </div>
                    <div className="prize-info">
                        <h3>🎁 경품</h3>
                        <p className="prize-amount">비상기어 상품권 5만원</p>
                    </div>
                    <div className="event-coupon gradient-gray">
                        <h3>참여 코드</h3>
                        <div className="coupon-code">REVIEW2026</div>
                    </div>
                    <button className="btn-shop" onClick={() => navigate('/')}>리뷰 작성하러 가기</button>
                </div>
            </div>
        );
    };

    // Router logic
    const eventComponents = {
        '1': <BackToSchoolEvent />,
        '2': <TradeInEvent />,
        '3': <AccessoryEvent />,
        '4': <MembershipEvent />,
        '5': <ReviewEvent />
    };

    const selectedEvent = eventComponents[id];

    if (!selectedEvent) {
        return (
            <Layout>
                <div style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2>이벤트를 찾을 수 없습니다</h2>
                    <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
                        메인으로 돌아가기
                    </button>
                </div>
            </Layout>
        );
    }

    return <Layout>{selectedEvent}</Layout>;
};

export default EventDetailPage;
