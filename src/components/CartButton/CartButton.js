import React from 'react';
import PropTypes from 'prop-types';

import CartSymbol from 'elements/CartSymbol/CartSymbol';

import { CartStyle, CartCountStyle } from './CartButtonCss';

const CartButton = ({ itemCount = 0}) => (
  <div style={CartStyle}>
    <a href="/checkout">
      <div style={CartCountStyle}>
        { itemCount }
      </div>
      <CartSymbol />
    </a>
  </div>
);

CartButton.propTypes = {
  itemCount: PropTypes.number
};

export default CartButton;