// import Notiflix from 'notiflix';
import css from '../ImageGallery/ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

export default function ImageGallery(props) {
    const { articles, onImgClick} = props;
          
    return (<ul className={css.ImageGallery}>
        {articles.map(article =>
            <ImageGalleryItem
                key={article.id}
                image={article.webformatURL}
                alt={article.tags}
               largeImage={article.largeImageURL}
                onImgClick={onImgClick}/>)}
            </ul>)
} 