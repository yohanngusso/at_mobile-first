import PropTypes from 'prop-types';
import styles from './Questions.module.css';

export default function Questions({ questions }) {
    return (
        <div className={styles.questions}>
            <h2>Perguntas</h2>
            {questions.map((question, index) => (
                <div key={index} className={styles.question}>
                    <p><strong>{question.user}</strong> - {question.date}</p>
                    <p>{question.query}</p>
                    <p><strong>Resposta:</strong> {question.answer}</p>
                </div>
            ))}
        </div>
    );
}

Questions.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            query: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired
        })
    ).isRequired
};