import Header from './components/Header';
import GlobalMenu from './components/GlobalMenu';
import ContextMenu from './components/ContextMenu';
import MainContent from './components/MainContent';
import Ads from './components/Ads';
import Footer from './components/Footer';
import styles from './App.module.css'; 

export default function App() {
    return (
        <div className={styles.gridContainer}>
            <Header />
            <GlobalMenu />
            <ContextMenu />
            <MainContent />
            <Ads />
            <Footer />
        </div>
    );
}
