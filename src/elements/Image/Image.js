import React from 'react';
import PropTypes from 'prop-types';

import ImageStyled from './ImageStyled';

const Image = ({ url, height, hardCorners }) => <ImageStyled src={url} height={height} hardCorners={hardCorners} />;

Image.propTypes = {};

export default Image;