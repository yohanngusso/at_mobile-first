import { useState } from 'react';
import styles from './ImageGallery.module.css';

export default function ImageGallery() {
    const [imageCount, setImageCount] = useState(5);

    const addImage = () => setImageCount(imageCount + 1);
    const removeImage = () => setImageCount(imageCount > 0 ? imageCount - 1 : 0);

    const images = Array.from({ length: imageCount }, (_, index) => (
        <div key={index} className={styles.image}>
            100 x 100
        </div>
    ));

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.controls}>
                <button onClick={addImage}>+</button>
                <span>{imageCount}</span>
                <button onClick={removeImage}>-</button>
            </div>
            <div className={styles.imageGrid}>
                {images}
            </div>
        </div>
    );
}
