// const BASE_KEY = '34725568-3bb6c7550daf8cb631b41e469';
// const BASE_URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
import { Component } from 'react'
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css'



export default class Searchbar extends Component{
    state={
        valueInput: '',
        page:1}

 handleChange = e => {
        const { value } = e.currentTarget;
        console.log(value);

        this.setState({ name: value })
    }

handleSubmit = e => {
        e.preventDefault();

        if(this.state.name.trim() === '') {
            // toast.error('Пожалуйста введите поисковое слово.');
            return;
        }

        this.props.onSubmitHandler(this.state);

        this.reset();
    }

    reset() {
        this.setState({ name: '' });
    }

render (){
    return (<header className={css.Searchbar }>
        <form className={css.SearchForm} onSubmit={ this.handleSubmit }>
            <button type="submit" className={ css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        onChange={ this.handleChange }
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
    )
}
}
Searchbar.propTypes = {
    onSubmitHandler: PropTypes.func.isRequired,
}
    