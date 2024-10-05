import { useState } from 'react';
import ShoppingList from './components/ShoppingList.jsx';
import './app.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const items = [
        { id: 1, name: 'Maça', unitPrice: 1.2, quantity: 3 },
        { id: 2, name: 'Banana', unitPrice: 0.5, quantity: 6 },
        { id: 3, name: 'Laranja', unitPrice: 0.8, quantity: 4 },
    ];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className="container">
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <ShoppingList items={items} />
        </div>
    );
};

export default App;