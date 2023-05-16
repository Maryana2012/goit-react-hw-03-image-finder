import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";



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
    const {valueInput, showModal,modalImage}=this.state
    return (<div>
      < Searchbar onSubmitInput={ this.handleInputSubmit} />
      <ImageGallery valueInput={valueInput}
        openModal={this.openModal}
      />
                
    </div>
      
    )
}
}
