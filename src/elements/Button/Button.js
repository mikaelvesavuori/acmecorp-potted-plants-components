import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './ButtonStyled';

const Button = (props) => <ButtonStyled onClick={(e) => onClickEvent(e)} className="normal" {...props}>{props.children ? props.children : "Button text"}</ButtonStyled>;

Button.propTypes = {
  /**
   * The click handler function.
   */
  onClickEvent: PropTypes.func.isRequired
};

export default Button;