import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    // Calculate discount percentage (example: 10-20% discount)
    const originalPrice = Math.round(product.price * 1.15);
    const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);

    return (
        <Link to={`/product/${product.id}`} className="product-card-link">
            <div className="product-card">
                {discountPercent > 0 && (
                    <div className="discount-badge">{discountPercent}%</div>
                )}
                <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-pricing">
                        {discountPercent > 0 && (
                            <span className="original-price">{originalPrice.toLocaleString()}원</span>
                        )}
                        <div className="price-row">
                            {discountPercent > 0 && (
                                <span className="discount-percent-text">{discountPercent}%</span>
                            )}
                            <span className="sale-price">{product.price.toLocaleString()}원</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
