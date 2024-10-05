import { useState, useEffect } from 'react';

const ExpandableMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Função para verificar a largura da tela e ajustar o estado
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  // Adiciona o event listener de resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Alternar o estado de expandido
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="menu-container">
      <div className="menu-header">
        <div className="platform-logo">Plataforma</div>
        {!isDesktop && (
          <button className="expand-button" onClick={toggleMenu}>
            {isExpanded ? '⬆️' : '⬇️'}
          </button>
        )}
        <div className="profile-icon">👤</div>
      </div>

      {/* Menu expandido ou colapsado */}
      {(isExpanded || isDesktop) && (
        <ul className="menu-options">
          <li className="menu-item">Início</li>
          <li className="menu-item">Serviços</li>
          <li className="menu-item">Produtos</li>
          <li className="menu-item">Contato</li>
        </ul>
      )}
    </nav>
  );
};

export default ExpandableMenu;
