// const BASE_KEY = '34725568-3bb6c7550daf8cb631b41e469';
// const BASE_URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
import { Component } from 'react'
import css from '../Searchbar/Searchbar.module.css'



export default class Searchbar extends Component{
    state={
      valueInput:''}

handleChange= e => {
    this.setState({valueInput: e.currentTarget.value.toLowerCase()})
}

handleSubmit=e=>{
    e.preventDefault();
    if (this.state.valueInput.trim() === ''){
        return
    }
    this.props.onSubmitInput(this.state.valueInput);
    this.setState({valueInput:''})
}
render (){
return ( <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
                <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
               className={css.SearchFormInput}
               type="text"
               value={this.state.valueInput}
               onChange={this.handleChange}
            //    autocomplete="off"
            //    autofocus
               placeholder="Search images and photos" />
         </form>
       </header>
    )
}
}
    