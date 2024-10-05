import { useState } from 'react';
import styles from './MainMenu.module.css';

export default function MainMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.mainMenu}>
            <button className={styles.menuButton} onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`${styles.menuList} ${menuOpen ? styles.menuOpen : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Produtos</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#contact">Contato</a></li>
                <li><a href="#cart">Carrinho</a></li>
            </ul>
        </nav>
    );
}