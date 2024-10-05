import PropTypes from 'prop-types';
import styles from './Post.module.css';

export default function Post({ post }) {
    return (
        <div className={styles.post}>
            <img src={post.image} alt={post.title} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <img src={post.avatar} alt={post.author} className={styles.avatar} />
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.author} - {post.date}</p>
                    </div>
                </div>
                <p>{post.text}</p>
                <div className={styles.footer}>
                    <span>Curtidas: {post.likes}</span>
                    <span>Compartilhamentos: {post.shares}</span>
                </div>
                <div className={styles.comments}>
                    <h3>Comentários</h3>
                    {post.comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            <p><strong>{comment.author}:</strong> {comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        shares: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                author: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
};