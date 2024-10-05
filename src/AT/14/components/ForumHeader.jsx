import { useState } from 'react';
import styles from './ForumHeader.module.css';

export default function ForumHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <h1>Fórum de Discussões</h1>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#discussoes">Discussões</a></li>
                    <li><a href="#top-topicos">Top Tópicos</a></li>
                    <li><a href="#novos-topicos">Novos Tópicos</a></li>
                    <li><a href="#perfil">Perfil</a></li>
                </ul>
            </nav>
            <button className={styles.menuButton} onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
}