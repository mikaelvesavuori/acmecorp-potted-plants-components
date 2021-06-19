import React from 'react';
import PropTypes from 'prop-types';

import Minus from 'elements/Minus/Minus';
import Plus from 'elements/Plus/Plus';

const IconButton = ({ minus, plus, clickEvent}) => (
  <div onClick={clickEvent}>
    { minus && <Minus /> }
    { plus && <Plus /> }
  </div>
);

IconButton.propTypes = {
  minus: PropTypes.string,
  plus: PropTypes.string,
  clickEvent: PropTypes.func.isRequired
};

export default IconButton;