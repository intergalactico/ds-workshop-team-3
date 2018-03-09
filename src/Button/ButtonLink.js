/*
 * ButtonLink is a component which renders a button with a link.
 */

import React from 'react';
import cx from 'classnames';
import * as s from './styles';
import { string, node, arrayOf, oneOfType } from 'prop-types';


/* Set up an HTML tag for the link button, and extend the styles */
const Element = s.Button.withComponent('a').extend`
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
`;

const ButtonLink = ({ href, children, ...props }) => {

  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  let className = cx('button', 'button--link', props.className);

  return (
    <Element {...props} href={href} className={className}>
      {children}
    </Element>
  );
};

ButtonLink.propTypes = {
  href: string,
  children: oneOfType([arrayOf(node), node]),
  className: string
};

ButtonLink.displayName = 'Link Button';
ButtonLink.defaultProps = {
  href: 'http://github.com'
};

export default ButtonLink;
