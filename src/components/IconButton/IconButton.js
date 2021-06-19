import React from 'react';
import PropTypes from 'prop-types';

import Minus from 'elements/Minus/Minus';
import Plus from 'elements/Plus/Plus';

import { IconButtonStyle } from './IconButtonCss';

const IconButton = ({ minus, plus, clickEvent}) => (
  <div style={ IconButtonStyle } onClick={clickEvent}>
    { minus && <Minus /> }
    { plus && <Plus /> }
  </div>
);

IconButton.propTypes = {
  minus: PropTypes.bool,
  plus: PropTypes.bool,
  clickEvent: PropTypes.func.isRequired
};

export default IconButton;