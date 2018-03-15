import React from 'react'
import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info';

import Hero from '.'

import heroImage from '../../assets/dsconf-wide.jpg';

storiesOf('Hero', module)
  .add('index', () => (
    <Hero heroImage = {heroImage} />
  ))
