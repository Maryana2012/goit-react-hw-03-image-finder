import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
export default function ImageGalleryItem({image, tags, largeImageURL, openModal}) {
    return (
        <li className={css.ImageGalleryItem}>
        <img src={image} alt={tags}
          largeImageURL={largeImageURL}
          onClick={() => openModal(largeImageURL) }
          className={css.ImageGalleryItemImage} />
        </li>
    )
}