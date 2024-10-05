import PropTypes from 'prop-types';
import styles from './RelatedProducts.module.css';

export default function RelatedProducts({ products }) {
    return (
        <div className={styles.relatedProducts}>
            <h2>Produtos Relacionados</h2>
            {products.map((product, index) => (
                <div key={index} className={styles.product}>
                    <img src={product.image} alt={product.name} className={styles.image} />
                    <p>{product.name}</p>
                    <p>Preço: R$ {product.price}</p>
                </div>
            ))}
        </div>
    );
}

RelatedProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
};