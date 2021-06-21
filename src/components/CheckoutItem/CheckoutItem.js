import React from 'react';
import PropTypes from 'prop-types';

import Image from 'elements/Image/Image';
import Description from 'elements/Description/Description';
import IconButton from 'components/IconButton/IconButton';

import {
  CheckoutItemOuter,
  CheckoutItemImage,
  CheckoutItemContents,
  CheckoutItemMinus,
  CheckoutItemPlus
} from './CheckoutItemCss';

const CheckoutItem = ({ name, count, price, addItemToCart, removeItemFromCart }) => {
  return (
    <div style={CheckoutItemOuter}>
      <div style={CheckoutItemImage}>
        <Image hardCorners height="144px" url="https://images.unsplash.com/photo-1508013861974-9f6347163ebe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=30" />
      </div>
      <div style={CheckoutItemContents}>
        <div>
          <Description right bold>{name}</Description>
          <Description right bold purple>{count} x {price} $</Description>
        </div>
        <div>
          <div style={CheckoutItemMinus}>
            <IconButton minus onClickEvent={removeItemFromCart} />
          </div>
          <div style={CheckoutItemPlus}>
            <IconButton plus onClickEvent={addItemToCart} />
          </div>
        </div>
      </div>
    </div>
  )
};

CheckoutItem.propTypes = {
	name: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
};

export default CheckoutItem;