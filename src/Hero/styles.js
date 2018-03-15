import styled, { css } from 'styled-components'

const heroBackground  = ({ heroBackground }) => {
  if(!heroBackground) return;
  return css`
    background-image: url(${heroBackground});
    background-size: cover;
  `
}

export const Hero = styled.div`
  padding-top: 10em;
  padding-bottom: 10em;
  color: #ffffff;
  min-height: 25em;
  text-align: center;
  ${heroBackground}

  .hero-logo {
    height: 200px;
  }
`;
