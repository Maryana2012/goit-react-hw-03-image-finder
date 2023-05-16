import { Component } from 'react'
import css from '../Button/Button.module.css' 
export default class Button extends Component {
    state = {
        page: 2
    }
    
    MakeButton = () => {
        if (this.props.totalHits-this.state.page * 12 > 12) {
            this.setState((prevState) => {return{ page: prevState.page + 1}}) } 
            this.props.onPageSubmit(this.state.page)
    }
    
    render() {
        return (<button type="button"
                 onClick={this.MakeButton}
                 className={css.Button}>
            Load More</button>)
    }
    
}