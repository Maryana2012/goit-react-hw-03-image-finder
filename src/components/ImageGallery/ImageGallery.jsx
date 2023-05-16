import { Component } from 'react';
// import Notiflix from 'notiflix';
import { RotatingLines } from "react-loader-spinner";
import css from '../ImageGallery/ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
    state = {
        gallery: '',
        loading: false,
        page: 1,
        // hitsLocalStorage:[]
    }
     componentDidMount() {
        const parsedHits = JSON.parse(localStorage.getItem("hits"));

        if (parsedHits !== null) {
            this.setState({ hits: parsedHits });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // let hitsLocalStorage = [];
        if (prevProps.valueInput !== this.props.valueInput || prevState.page!==this.state.page) {
             this.setState({loading: true, valueInput: ''})
            fetch(`https://pixabay.com/api/?q=cat&page=1&key=34725568-3bb6c7550daf8cb631b41e469&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12&q=${this.props.valueInput}`)
                .then(response => { return response.json() })
                .then(gallery => { this.setState({ gallery }) })
                .catch(error => this.setState({error}))
                .finally(()=>{this.setState({loading:false})})
        }
          if(this.state.gallery.hits !== prevState.gallery.hits) {
    
          localStorage.setItem("hits", JSON.stringify(this.state.gallery.hits));
        }
        // console.log(this.state.gallery.hits);
        // hitsLocalStorage.push(this.state.gallery.hits)
        // localStorage.setItem('hits',this.state.hitsLocalStorage)
    }

    onPageSubmit = page => {
        this.setState({page})
    }
   
    render() {
        const {gallery,loading,error}=this.state;
        const { hits } = gallery;
        return (<div>
             <ul className={css.ImageGallery}>
              {error && <h1>error.message</h1> }
                {loading && <RotatingLines />} 
                {gallery  && hits.map(hit => <ImageGalleryItem key={hit.id } image={hit.webformatURL} alt={hit.tags} />)}
            </ul>
            {this.state.gallery && <Button onPageSubmit={this.onPageSubmit} gallery={gallery} />}
            
           </div>
       
            )
       
    
    }
}