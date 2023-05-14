import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
export default function ImageGalleryItem({image, alt}) {
    return (
        <li className={css.ImageGalleryItem}>
          <img src={image} alt={alt} className={css.ImageGalleryItemImage} />
        </li>
    )
}