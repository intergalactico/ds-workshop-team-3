import React from 'react'
import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info';

import SiteFooter from '.'

storiesOf('SiteFooter', module)
  .add('index',
    withInfo(`
 Footer component provides a Footer.
    `)(() => (
    <SiteFooter>DSCONF 2018 - All rights reserved</SiteFooter>
  )));
