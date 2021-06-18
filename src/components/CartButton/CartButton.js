import React from 'react';
import PropTypes from 'prop-types';

import CartSymbol from 'elements/CartSymbol/CartSymbol';

import spacing from 'tokens/spacing';

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

const CartStyle = {
  position: "fixed",
  bottom: `${spacing.big}`,
  right: `${spacing.big}`
};

const CartCountStyle = {
  // Layout
  position: "absolute",
  width: "2rem",
  height: "2rem",
  top: "-0.25rem",
  left: "-0.25rem",
  // Appearance
  borderRadius: 100,
  color: "white",
  backgroundColor: "black",
  // Text
  fontFamily: "Roboto",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  textAlign: "center"
};

CartButton.propTypes = {
  itemCount: PropTypes.number
};

export default CartButton;