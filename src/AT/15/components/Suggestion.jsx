import PropTypes from 'prop-types';
import styles from './Suggestion.module.css';

export default function Suggestion({ suggestion }) {
    return (
        <div className={styles.suggestion}>
            <img src={suggestion.photo} alt={suggestion.name} className={styles.photo} />
            <div>
                <h3>{suggestion.name}</h3>
                <p>Amigo em comum: {suggestion.mutualFriend}</p>
            </div>
        </div>
    );
}

Suggestion.propTypes = {
    suggestion: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        mutualFriend: PropTypes.string.isRequired
    }).isRequired
};