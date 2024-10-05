import { useState } from 'react';
import './VerticalMenu.css';
import MenuItem from './MenuItem';

export default function VerticalMenu() {
  const [isExpanded, setIsExpanded] = useState(true); 

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`vertical-menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="menu-header">
        <img src='../../assets/images/logo.png' alt="Brand" className="brand-logo" />
        <button className="menu-icon" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className="menu-items">
        <MenuItem label="Perfil" />
        <MenuItem label="Postagens" />
        <MenuItem label="Amigos" />
        <MenuItem label="Fotos" />
        <MenuItem label="Vídeos" />
        <MenuItem label="Configurações" />
        <MenuItem label="Notificações" />
        <MenuItem label="Sair" />
      </div>
    </div>
  );
}
