/*
 * The TeamMember component renders a card of a team member. It contains
 * their avatar, name, title, and links to social networks.
 */

import React from 'react';
import { string, object } from 'prop-types';

/*
 * The TeamMember component has its own styles but also it used the styles
 * of the Typography component. These styles are imported directly from the
 * styled component file of the Typography component.
 */
import * as s from './styles.js';
import * as ts from '../Typography/styles.js';

/*
 * The TeamMember component reuses the Icon component when it needs to
 * render the icons for the social networks.
 */
import Icon from '../Icon';

const TeamMember = (props) => {
  /*
   * Cards for different people output different information. This is communicated
   * to the component with properties.
   */
  const { name, title, social, avatar } = props;

  /*
   * The component gets a list of social icons as an object. They need to be rendered as
   * HTML elements. For that, we iterate through the object and render an element from
   * the styled-components for each icon.
   */
  const socialItems = social ? Object.keys(social).map(key => {
      let link = social[key];
      if (key === 'twitter') {
        link = `https://twitter.com/@${social[key]}`;
      }

      return (<s.IconListItem key={'social-icon-item-' + key}>
          <s.IconLink href={link} target="_blank"><Icon name={key}/></s.IconLink>
        </s.IconListItem>);
    }) : null;
  const socialList = social ? <s.IconList>{socialItems}</s.IconList> : null;

  /*
   * The container for the card is the TeamMember styled-component, which brings
   * some styles. Inside, it renders the avatar and text info.
   */
  return (
    <s.TeamMember>
      <img src={avatar} width="200" />
      <ts.Header2>{name}</ts.Header2>
      TODO: show title
      {socialList}
    </s.TeamMember>
  );
};

TeamMember.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  avatar: string.isRequired,
  social: object
};

export default TeamMember;
