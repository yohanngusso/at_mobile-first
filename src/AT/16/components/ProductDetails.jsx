import PropTypes from 'prop-types';
import styles from './ProductDetails.module.css';

export default function ProductDetails({ product }) {
    return (
        <div className={styles.productDetails}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.content}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Preço: R$ {product.price}</p>
                <p>Nota: {product.rating} / 5</p>
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired
};