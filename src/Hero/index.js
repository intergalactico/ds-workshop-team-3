import React from 'react'

import * as s from './styles.js'

const Hero = ({children, ...props}) => {
  const {heroImage} = props;
  return (
    <s.Hero heroBackground = {heroImage}>Hero Background Image</s.Hero>
  )
}

export default Hero
