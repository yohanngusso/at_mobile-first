import Header from './components/Header';
import MainMenu from './components/MainMenu';
import ProductDetails from './components/ProductDetails';
import SellerInfo from './components/SellerInfo';
import Comments from './components/Comments';
import Questions from './components/Questions';
import RelatedProducts from './components/RelatedProducts';
import styles from './App.module.css';
import product from './data/product';
import seller from './data/seller';
import comments from './data/comments';
import questions from './data/questions';
import relatedProducts from './data/relatedProducts';

export default function App() {
    return (
        <div className={styles.app}>
            <Header />
            <MainMenu />
            <div className={styles.mainContent}>
                <ProductDetails product={product} />
                <SellerInfo seller={seller} />
                <Comments comments={comments} />
                <Questions questions={questions} />
                <RelatedProducts products={relatedProducts} />
            </div>
        </div>
    );
}