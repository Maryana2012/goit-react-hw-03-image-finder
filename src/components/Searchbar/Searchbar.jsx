import { Component } from 'react'
import css from '../Searchbar/Searchbar.module.css'
import Notiflix from 'notiflix';

export default class Searchbar extends Component{
    state={
      valueInput:''}

handleChange= e => {
    this.setState({valueInput: e.currentTarget.value.toLowerCase()})
}

handleSubmit = e => {
    e.preventDefault();
    if (this.state.valueInput.trim() === ''){
        Notiflix.Notify.info('Enter word for search')
    
    return;
    }
    this.props.onSubmitInput(this.state.valueInput);
    this.setState({ valueInput: '' })
    }
    
    render() {
        // const ulEl=document.querySelector('ul')
        const {valueInput}=this.state
         return ( <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
                <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
               className={css.SearchFormInput}
               type="text"
               value={valueInput}
               onChange={this.handleChange}
            //    onFocus={() => {
            //              localStorage.clear();
            //               ulEl.innerHTML=''}}
               autoComplete="off"
               autoFocus
               placeholder="Search images and photos" />
             </form>
            </header>
    )
}
}
    