import React from 'react';
import PropTypes from 'prop-types'


const Button = (props) => {
    return (
        <button  onClick={props.onButtonClick} > {props.text} </button>
    )
}

Button.propTypes = {
    onButtonClick: PropTypes.func, 
    text: PropTypes.string.isrequired
}

export default Button