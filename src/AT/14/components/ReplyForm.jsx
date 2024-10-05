import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ReplyForm.module.css';

export default function ReplyForm({ user }) {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar a resposta
        console.log('Resposta enviada:', content);
        setContent('');
    };

    return (
        <form className={styles.replyForm} onSubmit={handleSubmit}>
            <h3>Responder como {user}</h3>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Digite sua resposta..."
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

ReplyForm.propTypes = {
    user: PropTypes.string.isRequired
};