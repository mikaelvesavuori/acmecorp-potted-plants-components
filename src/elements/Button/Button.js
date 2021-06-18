import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './ButtonStyled';

const Button = (props) => <ButtonStyled className="normal" {...props}>{props.children ? props.children : "Button text"}</ButtonStyled>;

Button.propTypes = {};

export default Button;