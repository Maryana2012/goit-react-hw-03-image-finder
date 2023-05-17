import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
export default function ImageGalleryItem({ image, tags, largeImage,onImgClick }) {
    
    return (
        <li className={css.ImageGalleryItem}>
            <img src={ image } 
                 alt={ tags } className={css.ImageGalleryItemImage} 
                 onClick={() => onImgClick(largeImage)} />
        </li>
    )
}