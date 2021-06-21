import React from 'react';
import PropTypes from 'prop-types';

import Label from 'elements/Label/Label';
import Input from 'elements/Input/Input';

import { FormInputStyle } from './FormInputCss';

const FormInput = ({ label, type }) => (
  <div style={ FormInputStyle }>
    <Label htmlFor={ label }>{ label }</Label>
    <Input name={ label } type={ type } />
  </div>
);

FormInput.default = {
  type: "text"
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default FormInput;