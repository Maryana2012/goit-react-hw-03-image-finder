import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

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
ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func
}