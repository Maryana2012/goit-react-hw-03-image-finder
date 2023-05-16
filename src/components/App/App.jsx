import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import PropTypes from 'prop-types';

export default class App extends Component{
  state = {
    valueInput: '',
    largeImageURL:''
  }

  handleInputSubmit = valueInput => {
    this.setState({valueInput})
  }

  openModal = largeImageURL => {
   this.setState({largeImageURL})
  }
  
  render() {
    const {valueInput}=this.state
    return (<div>
      < Searchbar onSubmitInput={ this.handleInputSubmit} />
      <ImageGallery valueInput={valueInput}
                    openModal={this.openModal}
      />
                
    </div>
      
    )
}
}

App.propTypes = {
  onSubmitInput: PropTypes.func,
  valueInput: PropTypes.string,
  openModal: PropTypes.func
}
