import React, { useState, useEffect, useRef } from 'react';
import './EventCarousel.css';

const events = [
    { id: 1, title: '신학기 아카데미 페스티벌', desc: '새로운 시작을 위한 최고의 선택', color: '#FF9F43' },
    { id: 2, title: '태블릿 보상판매 특별전', desc: '쓰던 기기 반납하고 최대 혜택받자!', color: '#54a0ff' },
    { id: 3, title: '액세서리 50% 할인', desc: 'Visang 탭과 함께하면 더 완벽한 경험', color: '#ff6b6b' },
    { id: 4, title: 'Visang 멤버십 런칭', desc: '가입 즉시 10% 쿠폰 증정', color: '#1dd1a1' },
    { id: 5, title: '이달의 베스트 리뷰어', desc: '정성스러운 후기 남기고 선물 받아가세요', color: '#8395a7' },
];

const EventCarousel = () => {
    // Clone first and last for infinite loop effect
    const extendedEvents = [events[events.length - 1], ...events, events[0]];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef(null);

    const transitionDuration = 500; // ms

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [currentIndex]);

    const startAutoSlide = () => {
        stopAutoSlide();
        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, 15000); // 15 seconds
    };

    const stopAutoSlide = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
            // Jump to the real last slide
            setCurrentIndex(events.length);
        } else if (currentIndex === events.length + 1) {
            // Jump to the real first slide
            setCurrentIndex(1);
        }
    };

    // Calculate the actual active index for indicators (0-based)
    const activeIndicatorIndex = (currentIndex - 1 + events.length) % events.length;

    return (
        <div
            className="carousel-container"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedEvents.map((event, index) => (
                    <div
                        key={`${event.id}-${index}`}
                        className="carousel-slide"
                        style={{ backgroundColor: event.color }}
                    >
                        <div className="carousel-content">
                            <h2>{event.title}</h2>
                            <p>{event.desc}</p>
                            <button className="carousel-btn">이벤트 확인하기</button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button className="nav-btn next" onClick={nextSlide} aria-label="Next Slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <div className="carousel-indicators">
                {events.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === activeIndicatorIndex ? 'active' : ''}`}
                        onClick={() => {
                            if (!isTransitioning) {
                                setIsTransitioning(true);
                                setCurrentIndex(index + 1);
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventCarousel;
