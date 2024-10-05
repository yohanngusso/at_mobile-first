import PropTypes from 'prop-types';
import styles from './ReplyList.module.css';

export default function ReplyList({ replies }) {
    return (
        <div className={styles.replyList}>
            <h3>Respostas</h3>
            {replies.map((reply, index) => (
                <div key={index} className={styles.reply}>
                    <p>{reply.content}</p>
                    <div className={styles.meta}>
                        <span>Autor: {reply.author}</span>
                        <span>Data: {reply.date}</span>
                        <span>Curtidas: {reply.likes}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

ReplyList.propTypes = {
    replies: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        })
    ).isRequired
};