import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

export default function Sidebar({ recentTopics, mostRepliedTopics, mostLikedTopics }) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.section}>
                <h3>Tópicos Recentes</h3>
                <ul>
                    {recentTopics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.section}>
                <h3>Tópicos Mais Respondidos</h3>
                <ul>
                    {mostRepliedTopics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.section}>
                <h3>Tópicos Mais Curtidos</h3>
                <ul>
                    {mostLikedTopics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

Sidebar.propTypes = {
    recentTopics: PropTypes.arrayOf(PropTypes.string).isRequired,
    mostRepliedTopics: PropTypes.arrayOf(PropTypes.string).isRequired,
    mostLikedTopics: PropTypes.arrayOf(PropTypes.string).isRequired
};