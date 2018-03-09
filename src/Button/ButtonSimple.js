/*
 * SimpleButton is a basic component needed to render a button.
 */

import React from 'react';
import cx from 'classnames';
import * as s from './styles';
import { string, node, arrayOf, oneOfType } from 'prop-types';

/* Set up an HTML tag for the simple button */
const Element = s.Button.withComponent('button');

const ButtonSimple = ({ children, ...props }) => {

  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  let className = cx('button', props.className);

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  );
};

ButtonSimple.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  className: string
};

export default ButtonSimple;
