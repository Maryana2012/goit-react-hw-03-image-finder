import { Component } from "react";
import css from '../Modal/Modal.module.css'
export default class Modal extends Component{
componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown );
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown );
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdpropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }


    render() {
         const { children } = this.props;
        return (
            <div className={css.Overlay} onClick={ this.handleBackdpropClick }>
                <div className={css.Modal}>{ children}</div>
            </div>
    )
}
    
}
