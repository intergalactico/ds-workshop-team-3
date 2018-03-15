import React from 'react'
import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info';

import Hero, {HeroText, HeroHeader} from '.';
import Button from '../Button';

import heroImage from '../../assets/dsconf-wide.png';
import heroLogo from '../../assets/dsconf-logo.png';

storiesOf('Hero', module)
  .add('index',
    withInfo(`
 Hero component provides a heroImage.
    `)(() => (
    <Hero heroImage = {heroImage}>
      <p><img src={heroLogo} className="hero-logo"/></p>
      <HeroHeader>A design systems conference</HeroHeader>
      <HeroText>
        March 14th – 15th, 2019<br/>
        in Paris, France
      </HeroText>
      <Button>Purchase tickets</Button>
    </Hero>
  )));
