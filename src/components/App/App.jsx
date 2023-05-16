import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";

export default class App extends Component{
  state = {
    valueInput: ''
  }
  
  handleInputSubmit = valueInput => {
    this.setState({valueInput})}

  render() {
    const {valueInput}=this.state
    return (<div>
      < Searchbar onSubmitInput={ this.handleInputSubmit} />
      <ImageGallery valueInput={valueInput}  />         
            </div> )
}
}
