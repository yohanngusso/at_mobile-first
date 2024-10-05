import './menu.css';

export default function Menu() {
    return (
        <nav className='menu'>
            <div className='menu-logo'>
                <img src='logo.png' alt='Logo' />
            </div>
            <div className='menu-items'>
                <a href='#'>Produtos</a>
                <a href='#'>Serviços</a>
                <a href='#'>Contato</a>
            </div>
            <div className='menu-icon'>
                <img src='menu-icon.png' alt='Menu Icon' />
            </div>
        </nav>
    );
}