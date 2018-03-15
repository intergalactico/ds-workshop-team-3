import React from 'react'

import * as s from './styles.js'
import { node, arrayOf, oneOfType, string, bool } from 'prop-types';

import * as ts from '../Typography/styles.js';

const Hero = ({ children, ...props }) => {
  const {heroImage} = props;
  return (
    <s.Hero heroBackground = {heroImage}>
      { children }
    </s.Hero>
  )
}

Hero.propTypes = {
  heroImage: string,
  children: oneOfType([arrayOf(node), node])
};

export default Hero

const HeroText = ({ children, ...props }) => {
  const { isInverted } = props;
  return (<ts.P isInverted={isInverted}>{children}</ts.P>);
};

HeroText.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

export { HeroText };

const HeroHeader = ({ children, ...props }) => {
  const { isInverted } = props;
  return (<ts.Header1 isInverted={isInverted}>{children}</ts.Header1>);
};

HeroHeader.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

export { HeroHeader };
