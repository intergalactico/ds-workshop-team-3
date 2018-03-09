import styled, { injectGlobal } from 'styled-components';

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
  @font-face {
    font-family:"futura-pt-bold";
    src:url("https://use.typekit.net/af/ff35f0/00000000000000003b9af1e4/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/ff35f0/00000000000000003b9af1e4/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/ff35f0/00000000000000003b9af1e4/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-style:normal;font-weight:700;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/f7f60c/00000000000000000001522d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/f7f60c/00000000000000000001522d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/f7f60c/00000000000000000001522d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-style:italic;font-weight:400;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/4d053a/00000000000000000001522b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/4d053a/00000000000000000001522b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/4d053a/00000000000000000001522b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
    font-style:italic;font-weight:300;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/02671f/00000000000000000001522c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/02671f/00000000000000000001522c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/02671f/00000000000000000001522c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-style:normal;font-weight:400;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/0a97db/00000000000000000001522a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/0a97db/00000000000000000001522a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/0a97db/00000000000000000001522a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
    font-style:normal;font-weight:300;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/704d65/00000000000000000001522e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/704d65/00000000000000000001522e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/704d65/00000000000000000001522e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
    font-style:normal;font-weight:500;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/48f634/00000000000000000001522f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/48f634/00000000000000000001522f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/48f634/00000000000000000001522f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");
    font-style:italic;font-weight:500;
  }
`;

/*
 * The styles below use the color from th set.
 */
import colors from '../Colors/colorset';

/*
 * Typography component provides styles for basic typography elements
 * such as headers and paragraphs.
 */

export const Header1 = styled.h1`
  font-family: futura-pt-bold;
`;

export const Header2 = styled.h2`
  font-family: futura-pt-bold, sans-serif;
  font-size: 22px;
  color: ${colors.dark};
  line-height: 1.4em;
  margin: 0;
`;

export const Header3 = styled.h3`
  font-family: lato, sans-serif;
  font-size: 16px;
  color: ${colors.grey};
  font-weight: 700;
  margin: 0;
`;

export const P = styled.p`
  font-family: lato;
  color: ${colors.dark};
`;

/*
 * In ordder to show in the story (documentation) what are the available
 * fonts, this component provides styles for each font. They are not
 * meant to be used in the other components, only in dpcumentation.
 */

export const FuturaBold = styled.p`
  font-family: futura-pt-bold;
`;

export const Lato = styled.p`
  font-family: lato;
`;
