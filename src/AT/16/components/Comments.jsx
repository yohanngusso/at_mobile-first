import PropTypes from 'prop-types';
import styles from './Comments.module.css';

export default function Comments({ comments }) {
    return (
        <div className={styles.comments}>
            <h2>Comentários</h2>
            {comments.map((comment, index) => (
                <div key={index} className={styles.comment}>
                    <p><strong>{comment.user}</strong> - {comment.date}</p>
                    <p>{comment.message}</p>
                    <p>Nota: {comment.rating} / 5</p>
                </div>
            ))}
        </div>
    );
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
};