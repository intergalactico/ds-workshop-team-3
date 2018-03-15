import React from 'react'

import { node, arrayOf, oneOfType, string, bool } from 'prop-types';

import * as s from './styles.js'
import * as ts from '../Typography/styles.js';

const SiteFooter = ({children, ...props}) => {
  return (
    <s.SiteFooter><ts.smallText isInverted={true}>{children}</ts.smallText></s.SiteFooter>
  )
}

SiteFooter.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

export default SiteFooter
