import React from "react";
import PropTypes from 'prop-types';

import Card from "elements/Card/Card";
import Image from "elements/Image/Image";
import Heading from "elements/Heading/Heading";
import Description from "elements/Description/Description";
import Button from "elements/Button/Button";

import { ProductCardContentsStyle } from './ProductCardCss';

const ProductCard = ({ imageUrl, heading, description, price, id, addItemToCart }) => (
  <Card>
    <Image url={imageUrl} />
    <div style={ProductCardContentsStyle}>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <Button id={id} onClick={(e) => addItemToCart(e)}>{price} $</Button>
    </div>
  </Card>
);

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  addItemToCart: PropTypes.func.isRequired
};

export default ProductCard;