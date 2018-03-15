import styled, { css } from 'styled-components'

const heroBackground  = ({ heroBackground }) => {
  if(!heroBackground) return;
  return css`
    background-image: url(${heroBackground});
    background-size: cover;
  `
}

export const Hero = styled.div`
  color: #ffffff;
  height: 25em;
  ${heroBackground}
`;
