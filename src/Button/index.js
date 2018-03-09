/*
 * Button component. It provides interfaces for all types
 * of the buttons. Different types of the buttons are coded
 * as different components and imported here.
 */

import React from 'react';
import { string } from 'prop-types';

import ButtonSimple from './ButtonSimple';
import ButtonLink from './ButtonLink';
import ButtonLabel from './ButtonLabel';

const Button = ({ href, label, children, ...props }) => {
  /*
   * Different buttons to be rendered, depending on the
   * given properties
   */
  if (href) {
    return <ButtonLink href={href} {...props}>{children}</ButtonLink>;
  } else if (label) {
    return <ButtonLabel label={label} {...props}>{children}</ButtonLabel>;
  } else {
    return <ButtonSimple {...props}>{children}</ButtonSimple>;
  }
};

Button.propTypes = {
  href: string,
  label: string
};

export default Button;
