/*
 * The stories (documentation) for the TeamMember component render two different
 * cases: with and without providing a list of social networks.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

import TeamMember from '.';

import avatar from '../../assets/avatar.jpg';

storiesOf('TeamMember', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`
 The TeamMember component renders a card of a team member. It contains
 their avatar, name, title, and links to social networks.
    `)(() => (
      <TeamMember
        name="Donald Duck"
        title="Director of Everything"
        social={{
          twitter: 'donaldducknl',
          linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
        }}
        avatar={avatar}
      />
  )))
  .add('no social networks',
    withInfo()(() => (
      <TeamMember
        name="Donald Duck"
        title="Director of Everything"
        avatar={avatar}
      />
  )));
