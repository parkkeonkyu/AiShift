import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card">
                <div className="product-image">
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">
                        <span className="price-value">{product.price.toLocaleString()}원</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
