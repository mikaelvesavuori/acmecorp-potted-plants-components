import React from 'react';
import PropTypes from 'prop-types';

import Form from 'elements/Form/Form';
import FormInput from 'components/FormInput/FormInput';
import Button from 'elements/Button/Button';

import CheckoutFormStyle from './CheckoutFormCss';

const CheckoutForm = () => (
  <Form>
    <FormInput label="Name" />
    <FormInput label="Street address" type="address" />
    <FormInput label="Email address" type="email" />
    <FormInput label="Telephone number" type="tel" />
    <FormInput label="City" />

    <Button>Place order</Button>
  </Form>
);

CheckoutForm.propTypes = {};

export default CheckoutForm;