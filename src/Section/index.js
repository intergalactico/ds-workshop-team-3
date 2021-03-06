/*
 * Section component provides a container with paddings.
 */
import React from 'react';
import * as s from './styles';
import { node, arrayOf, oneOfType, string, bool } from 'prop-types';


/*
 * Even though the component is using plain CSS, it still can re-use
 * styled-components from other patterns.
 */
import * as ts from '../Typography/styles.js';

/*
 * Note! When using plain CSS, the class names have to be provided manually.
 */
const Section = ({ children, ...props }) => {
  const { isInverted, bg } = props;
  return (
    <s.Section isInverted={isInverted} bg={bg}>
      <div className="section__inner">
        {children}
      </div>
    </s.Section>
  );
};

Section.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  bg: string,
  isInverted: bool
};

export default Section;

/*
 * For re-use of Typography styles, Section component has a couple of subcomponents to be
 * used as wrappers for texts and headers. Check out the story (documentation) to see how
 * these wrappers are used.
 */
const SectionHeader = ({ children, ...props }) => {
  const { isInverted } = props;
  return (<ts.Header1 isInverted={isInverted}>{children}</ts.Header1>);
};

SectionHeader.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

export { SectionHeader };


const SectionText = ({ children, ...props }) => {
  const { isInverted } = props;
  return (<ts.P isInverted={isInverted}>{children}</ts.P>);
};

SectionText.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

export { SectionText };
