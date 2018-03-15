import React from 'react'
import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info';

import Hero, {HeroText, HeroHeader} from '.';

import heroImage from '../../assets/dsconf-wide.jpg';
import heroLogo from '../../assets/dsconf-logo.png';

storiesOf('Hero', module)
  .add('index', () => (
    <Hero heroImage = {heroImage}>
      <p><img src={heroLogo} className="hero-logo"/></p>
      <HeroHeader isInverted>A DESIGN SYSTEMS CONFERENCE</HeroHeader>
      <HeroText isInverted>
        MARCH 14th – 15th, 2018<br/>
        IN HELSINKI, FINLAND
      </HeroText>
    </Hero>
  ))
