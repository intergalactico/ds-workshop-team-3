/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import heroImage from '../assets/dsconf-wide.jpg';


import { Icon, Hero, Section, SectionHeader, SectionText } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Home = () => {
  return (
    <div>
        <Hero heroImage = {heroImage} />
        <Section>
          <SectionHeader>Test</SectionHeader>
          <SectionText>Text inside the section (with typography).</SectionText>
        </Section>
        <Section isInverted>
          <SectionHeader isInverted>Inverted Section</SectionHeader>
          <SectionText isInverted>Text inside the section (with typography).</SectionText>
        </Section>
        
    </div>
  )
}

export default Home
