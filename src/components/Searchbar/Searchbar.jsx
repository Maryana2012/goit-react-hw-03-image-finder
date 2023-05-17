import { Component } from 'react'
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from '../Searchbar/Searchbar.module.css'

export default class Searchbar extends Component{
    state={
        name: '',
        page: 1,
        }

handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value })
}

handleSubmit = e => {
    e.preventDefault();
    if(this.state.name.trim() === '') {
        Notiflix.Notify.info('Enter word for request');
        return;
    }
    this.props.onSubmitHandler(this.state);
    this.setState({ name: '' })
}

render (){
    return (<header className={css.Searchbar }>
                <form className={css.SearchForm} onSubmit={ this.handleSubmit }>
                    <button type="submit" className={ css.SearchFormButton}></button>
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
    