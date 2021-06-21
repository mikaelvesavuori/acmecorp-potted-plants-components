import React from 'react';
import PropTypes from 'prop-types';

import Minus from 'elements/Minus/Minus';
import Plus from 'elements/Plus/Plus';

import { IconButtonStyle } from './IconButtonCss';

const IconButton = ({ minus, plus, onClickEvent}) => (
  <div style={ IconButtonStyle } onClick={onClickEvent}>
    { minus && <Minus /> }
    { plus && <Plus /> }
  </div>
);

IconButton.propTypes = {
  minus: PropTypes.bool,
  plus: PropTypes.bool,
  onClickEvent: PropTypes.func.isRequired
};

export default IconButton;