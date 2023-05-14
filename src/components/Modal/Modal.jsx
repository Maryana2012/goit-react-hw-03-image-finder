import { Component } from "react";
import css from '../Modal/Modal.module.css'
export default class Modal extends Component{


    render() {
        return (
            <div className={css.Overlay}>
                <div className={css.Modal}>{ this.props.children}</div>
            </div>
    )
}
    
}
