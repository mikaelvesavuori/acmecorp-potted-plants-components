import React from 'react';
import PropTypes from 'prop-types';

const CheckoutForm = () => (
  <form>
    <label htmlFor="input-name">Name</label>
    <input name="input-name" />

    <label htmlFor="input-address">Address</label>
    <input name="input-address" />

    <label htmlFor="input-city">City</label>
    <input name="input-city" />

    <hr />

    <button type="submit">Submit</button>
  </form>
);

CheckoutForm.propTypes = {};

export default CheckoutForm;