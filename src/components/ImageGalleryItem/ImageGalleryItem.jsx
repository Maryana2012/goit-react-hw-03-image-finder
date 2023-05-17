import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
export default function ImageGalleryItem(props) {
    const { image, tags, largeImage, onImgClick } = props;
    return (
        <li className={css.ImageGalleryItem}>
            <img src={ image } 
                 alt={ tags } className={css.ImageGalleryItemImage} 
                 onClick={() => onImgClick(largeImage)} />
        </li>
    )
}
ImageGalleryItem.propTypes = {
    image: PropTypes.string,
    largeImage: PropTypes.string,
    tags: PropTypes.string,
    onModal: PropTypes.func,
}