import React from 'react';
import PropTypes from 'prop-types';

import Button from 'elements/Button/Button';
import Form from 'elements/Form/Form';
import FormInput from 'components/FormInput/FormInput';

const CheckoutForm = () => (
  <Form>
    <FormInput label="Name" />
    <FormInput label="Street address" type="address" />
    <FormInput label="City" />
    <FormInput label="Email address" type="email" />
    <FormInput label="Telephone number" type="tel" />

    <Button onClickEvent={ (e) => submitForm(e) }>Place order</Button>
  </Form>
);

const submitForm = (e) => {
  e.preventDefault();
  alert("Thank you for your order!");
}

CheckoutForm.propTypes = {};

export default CheckoutForm;