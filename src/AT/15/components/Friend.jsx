import PropTypes from 'prop-types';
import styles from './Friend.module.css';

export default function Friend({ friend }) {
    return (
        <div className={styles.friend}>
            <img src={friend.photo} alt={friend.name} className={styles.photo} />
            <div>
                <h3>{friend.name}</h3>
                <p>{friend.mutualFriends} amigos em comum</p>
            </div>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        mutualFriends: PropTypes.number.isRequired
    }).isRequired
};