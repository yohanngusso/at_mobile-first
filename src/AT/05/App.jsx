import styles from './App.module.css';
import GlobalMenu from './components/GlobalMenu';
import Header from './components/Header';
import ContextMenu from './components/ContextMenu';
import MainContent from './components/MainContent';
import Ads from './components/Ads';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <GlobalMenu />
        <Header />
      </header>
      <ContextMenu />
      <MainContent />
      <Ads />
      <Footer />
    </div>
  );
};

export default App;
