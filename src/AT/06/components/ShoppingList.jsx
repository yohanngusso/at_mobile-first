import PropTypes from 'prop-types';

const ShoppingList = ({ items }) => {
    const total = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

    return (
        <div>
            <ul className="shopping-list">
                {items.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>Preço por Unidade: ${item.unitPrice.toFixed(2)}</span>
                        <span>Quantidade: {item.quantity}</span>
                        <span>Total: R${(item.unitPrice * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className="total">Preço Total: R${total.toFixed(2)}</div>
        </div>
    );
};

ShoppingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            unitPrice: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ShoppingList;

