import React from 'react';
import PropTypes from 'prop-types';

import InputStyled from './InputStyled';

const Input = (props) => <InputStyled minLength="2" className="normal" type="text" placeholder="Some placeholder..." {...props} />;

Input.propTypes = {};

export default Input;