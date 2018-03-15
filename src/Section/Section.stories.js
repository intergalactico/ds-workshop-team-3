import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

/*
 * This story (documentation) shows how to use the Section component and its
 * helping sub-components for the texts. The subcomponents are imported
 * as one object and are renamed to "t", this is shorter. Look below how
 * to wrap texts with them.
 */
import Section, {SectionHeader, SectionText} from '.';

import examplebg from '../../assets/dsconf-wide.jpg';

storiesOf('Section', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`
 Section component provides a container with paddings.
    `)(() => (
      <div>
        <Section>
          <SectionHeader>Test</SectionHeader>
          <SectionText>Text inside the section (with typography).</SectionText>
        </Section>

        <Section isInverted>
          <SectionHeader isInverted>Inverted Section</SectionHeader>
          <SectionText isInverted>Text inside the section (with typography).</SectionText>
        </Section>

        <Section isInverted bg={examplebg}>
          <SectionHeader isInverted>Inverted Section with Background</SectionHeader>
          <SectionText isInverted>Text inside the section (with typography).</SectionText>
        </Section>
      </div>
  )));
