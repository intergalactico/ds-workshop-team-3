/*
 * All the button components are using the same styled-component. There is only
 * one file with styles (this one) which is imported into all the button components.
 */

import styled, { css } from 'styled-components';
import colors from '../Colors/colorset.js';


const isInverted = ({ isInverted }) => {
  if (!isInverted) return;
  return css`
    background-color: ${colors.brandDark};
    color: ${colors.white};
  `;
};

const bg = ({ bg }) => {
  if (!bg) return;
  return css`
    background-image: url(${bg});
  `;
};

/* Default styles for all the buttons */
export const Section = styled.section`
  padding-top: 100px;
  padding-right: 0;
  padding-bottom: 100px;
  padding-left: 0;
  .section__inner {
    max-width: 650px;
    padding-top: 50px;
    margin-right: auto;
    padding-bottom: 50px;
    margin-left: auto;
  }

  ${isInverted}
  ${bg}
`;
