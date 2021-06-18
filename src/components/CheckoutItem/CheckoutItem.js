import React from 'react';
import PropTypes from 'prop-types';

import Image from 'elements/Image/Image';
import Description from 'elements/Description/Description';
import Minus from 'elements/Minus/Minus';
import Plus from 'elements/Plus/Plus';

import {
  CheckoutItemOuter,
  CheckoutItemImage,
  CheckoutItemContents,
  CheckoutItemMinus,
  CheckoutItemPlus
} from './CheckoutItemCss';

const CheckoutItem = ({ name, count, addItemToCart, removeItemFromCart }) => {
  return (
    <div style={CheckoutItemOuter}>
      <div style={CheckoutItemImage}>
        <Image hardCorners height="144px" url="https://images.unsplash.com/photo-1508013861974-9f6347163ebe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=30" />
      </div>
      <div style={CheckoutItemContents}>
        <div>
          <Description right bold>{name}</Description>
          <Description right bold purple>{count}</Description>
        </div>
        <div>
          <div style={CheckoutItemMinus}>
            <Minus id={name} onClick={(e) => removeItemFromCart(e)} />
          </div>
          <div style={CheckoutItemPlus}>
            <Plus id={name} onClick={(e) => addItemToCart(e)} />
          </div>
        </div>
      </div>
    </div>
  )
};

CheckoutItem.propTypes = {
	name: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
};

export default CheckoutItem;