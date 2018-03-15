import styled, { css, injectGlobal } from 'styled-components';

/*
 * The feature of styled components is that they encapsulate the
 * styles by providing unique classnames. This ensures that the styles of
 * one component does not mix with the styles of other components.
 * However, sometimes you need to provide global CSS to be used across
 * the whole application. This is possible with injectGlobal method.
 * Defining fonts for typography is a good demonstration of such a need.
 *
 * Documentation: https://www.styled-components.com/docs/api#injectglobal
 */

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i');
`;

const isInverted = ({ isInverted }) => {
  if (!isInverted) return css`
    color: ${colors.dark};
  `;
  return css`
    color: ${colors.white};
  `;
};

/*
 * The styles below use the color from th set.
 */
import colors from '../Colors/colorset';

/*
 * Typography component provides styles for basic typography elements
 * such as headers and paragraphs.
 */

export const Header1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 51px;
  font-weight: 200;
  ${isInverted}
`;

export const Header2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  color: ${colors.dark};
  line-height: 1.4em;
  margin: 0;
  font-weight: 200;
  ${isInverted}
`;

export const Header3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: ${colors.grey};
  font-weight: 700;
  margin: 0;
  font-weight: 200;
  ${isInverted}
`;

export const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 300;
  ${isInverted}
`;

export const smallText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  ${isInverted}
`;

/*
 * In ordder to show in the story (documentation) what are the available
 * fonts, this component provides styles for each font. They are not
 * meant to be used in the other components, only in dpcumentation.
 */

export const FuturaBold = styled.p`
  font-family: 'Montserrat', sans-serif;
`;

export const Lato = styled.p`
  font-family: 'Montserrat', sans-serif;
`;
