import './menu.css';
import Image1 from '../../assets/images/logo.png';
import Image2 from '../../assets/images/menu-icon.png';

export default function Menu() {
    return (
        <nav className='menu'>
            <div className='menu-logo'>
                <img src={Image1} alt='Logo' />
            </div>
            <div className='menu-items'>
                <a href='#'>Produtos</a>
                <a href='#'>Serviços</a>
                <a href='#'>Contato</a>
            </div>
            <div className='menu-icon'>
                <img src={Image2} alt='Menu Icon' />
            </div>
        </nav>
    );
}