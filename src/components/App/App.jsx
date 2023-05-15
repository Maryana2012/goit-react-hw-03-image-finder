import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
// import Modal from "components/Modal/Modal";

export default class App extends Component{
  state = {
    valueInput: '',
  }
  handleInputSubmit = valueInput => {
    this.setState({valueInput})
  }

 
  render() {
    const {valueInput}=this.state
    return (<div>
      < Searchbar onSubmitInput={ this.handleInputSubmit} />
      <ImageGallery valueInput={valueInput}/>
      {/* <Button valueInput={valueInput} /> */}
     
      {/* {showModal && <Modal />} */}
      
    </div>
      
    )
}
}
