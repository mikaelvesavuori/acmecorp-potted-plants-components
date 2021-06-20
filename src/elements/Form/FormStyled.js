import styled from 'styled-components';

import FormCss from './FormCss';

import spacing from 'tokens/spacing';

// Extend the below as needed
const FormStyled = styled.form`
  ${FormCss};
  padding: ${spacing.spacious};
  height: auto;
`;

export default FormStyled;