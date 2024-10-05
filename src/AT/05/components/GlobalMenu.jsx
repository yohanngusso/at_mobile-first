import styles from './GlobalMenu.module.css';
import { useState } from 'react';

const GlobalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.globalMenu}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰ Global Menu
      </button>
      {isOpen && (
        <div className={styles.menuItems}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GlobalMenu;
