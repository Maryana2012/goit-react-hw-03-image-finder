import { Component } from 'react';
// import Notiflix from 'notiflix';
import { RotatingLines } from "react-loader-spinner";
import css from '../ImageGallery/ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import Button from 'components/Button/Button';
import Modal from "components/Modal/Modal";

export default class ImageGallery extends Component {
    state = {
        gallery: [],
        loading: false,
        page: 1,
        totalHits: 0,
        showModal: false,
        // modalImage: '',
       
    }
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }));
    }
    componentDidMount() {
       
        
        const parsedHits = JSON.parse(localStorage.getItem("hits"));

        if (parsedHits !== null) {
            this.setState({ hits: parsedHits });
           this.props.openModal(this.largeImageURL);  
            
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // let hitsLocalStorage = [];
        //  if (this.props.valueInput === '') { localStorage.clear() }
        if (prevProps.valueInput !== this.props.valueInput || prevState.page!==this.state.page) {
             this.setState({loading: true, valueInput: ''})
            fetch(`https://pixabay.com/api/?q=cat&page=1&key=34725568-3bb6c7550daf8cb631b41e469&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12&q=${this.props.valueInput}`)
                .then(response => { return response.json() })
                .then(res => {
                    this.setState(prev => ({
                        gallery: [...prev.gallery, ...res.hits],
                        totalHits: res.totalHits,
                        largeImageURL: res.largeImageURL
                    }))
                })
                .catch(error => this.setState({error}))
                .finally(()=>{this.setState({loading:false})})
        }
         
         if (this.state.gallery !== prevState.gallery) {
           localStorage.setItem('hits', JSON.stringify(this.state.gallery) )}
    }

    openModal = largeImageURL => {
        this.setState({
          showModal: true,
          modalImage: largeImageURL,
        });
    }


    onPageSubmit = page => {
        this.setState({page})
    }
   
    render() {
        const {gallery,loading,error, totalHits,largeImageURL,modalImage, showModal}=this.state;
            return (<div>
              {error && <h1>error.message</h1> }
              {loading && <RotatingLines />} 
             <ul className={css.ImageGallery}>
                    {gallery && gallery.map(image => <ImageGalleryItem key={image.id}
                        image={image.webformatURL}
                        alt={image.tags}
                        largeImageURL={largeImageURL}
                        openModal={this.openModal } />)}
            </ul>
                {this.state.gallery.length !==0  && <Button onPageSubmit={this.onPageSubmit} gallery={gallery} totalHits={totalHits} />}
                {showModal && (
                <Modal onClose={ this.toggleModal }>
                <img src={modalImage} alt="largeImage" className={css.Image} />
                </Modal> )}
               
           </div>
       
            )
       
    
    }
}