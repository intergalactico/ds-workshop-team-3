import React from 'react'

import * as s from './styles.js'
import { string } from 'prop-types';

const Hero = ({...props}) => {
  const {heroImage} = props;
  return (
    <s.Hero heroBackground = {heroImage}>Hero Background Image</s.Hero>
  )
}

Hero.propTypes = {
  heroImage: string
};

export default Hero
