import PropTypes from 'prop-types';
import styles from './PostDetails.module.css';

export default function PostDetails({ post }) {
    return (
        <div className={styles.postDetails}>
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>
            <p>{post.description}</p>
            <div className={styles.meta}>
                <span>Autor: {post.author}</span>
                <span>Data: {post.date}</span>
                <span>Curtidas: {post.likes}</span>
                <span>Respostas: {post.replies}</span>
            </div>
        </div>
    );
}

PostDetails.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        replies: PropTypes.number.isRequired
    }).isRequired
};