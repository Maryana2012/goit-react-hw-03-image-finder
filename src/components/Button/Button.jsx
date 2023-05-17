import PropTypes from 'prop-types';
import css from '../Button/Button.module.css' 

export default function Button ({onButtonClick}){
    return (<button type="button"
            onClick={onButtonClick}
            className={css.Button}>
            Load More</button>
        )
}
Button.propTypes = {
    onButtonClick: PropTypes.func,
}