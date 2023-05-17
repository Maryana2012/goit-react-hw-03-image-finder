import { Component } from "react";
import axios from "axios";
import Button from "components/Button/Button";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Modal from "components/Modal/Modal";
import { RotatingLines } from "react-loader-spinner";
import css from '../App/App.module.css'
import Notiflix from 'notiflix';

export default class App extends Component{
  state = {
        hits: [],
        name: '',
        page: 1,
        showModal: false,
        loading: false,
        modalImage: '',
        visibleLoadMore: false
    }
   async pixabayApi(name, page) {        
        this.setState({ loading: true });

        try {
            const response = await axios(`https://pixabay.com/api/?q=${name}&page=${page}&key=34725568-3bb6c7550daf8cb631b41e469&image_type=photo&orientation=horizontal&per_page=24`);

            const totalPages = response.data.totalHits / response.data.hits.length;
           
            if (response.data.hits.length < 1) {
                this.setState({ loading: false })
                 Notiflix.Notify.info('Enter word for request')
                return;
            }
            this.setState(({ loading, hits, page, }) => {
                return {
                loading: !loading,
                hits: [...hits,...response.data.hits],
                page: page + 1,
                }
            });
            this.setState({ visibleLoadMore: true });
            if (response.data.hits.length<24) {
                this.setState({ loading: false, visibleLoadMore: false })
                // toast.error('Извините, но это были последние изображения.');
            }
            return response.data.hits;
        } catch (error) {
            this.setState({ error });
        }
  }
  
    getValue = data => {
        this.setState({ name: data.name, page: data.page, hits: []});
        const { name, page } = data;
        const response = this.pixabayApi(name, page);
        return response;
    }

    openModal = largeImageURL => {
        this.setState({
          showModal: true,
          modalImage: largeImageURL,
        });
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
        }
    }
 componentDidUpdate (prevProps, prevState) {
        if(this.state.hits !== prevState.hits) {
    
          localStorage.setItem("hits", JSON.stringify(this.state.hits));
        }
    }

handleInputSubmit = valueInput => {
    this.setState({valueInput})
  }

  render() {
       const { hits, showModal, name, page, loading, modalImage, visibleLoadMore } = this.state;
   
    return (<div>
     <Searchbar onSubmitHandler={ this.getValue } />
       {loading && <RotatingLines />}
        {hits && ( <ImageGallery articles={ hits } onImgClick={ this.openModal }/> )}
       {showModal && (
                <Modal onClose={ this.toggleModal }>
                <img src={modalImage} alt="largeImage" className={css.Image} />
                </Modal> )}

                { visibleLoadMore && (
                <Button onButtonClick={ () => this.pixabayApi(name, page) } />)}
    </div>
      
    )
}
}
