/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Icon, Section, SectionHeader, SectionText } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Home = () => {
  return (
    <div>
      <div>
        <Icon name='star' color='#000' isInverted size='0.785rem' />
        <Icon name='star' color='#888888' isInverted />
        <Icon name='github' color='#1b8ceb'isInverted size='1.5rem' />
        <Icon name='gift' color='#00d1b2' isInverted size='2.0rem' />
        <Icon name='bug' color='#e91e63' isInverted size='3rem' />
      </div>
      <div>
        <Section>
          <SectionHeader>Hello!</SectionHeader>
          <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionText>
        </Section>
      </div>
    </div>
  )
}

export default Home
