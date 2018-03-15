/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import heroImage from '../assets/dsconf-wide.png';
import heroLogo from '../assets/dsconf-logo.png';
import avatar from '../assets/curtis-square-1-1.jpg';

import { Icon, Hero, Section, SectionHeader, SectionText , Button, HeroHeader, HeroText, TeamMember} from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Home = () => {
  return (
    <div>
         <Hero heroImage = {heroImage}>
      <p><img src={heroLogo} className="hero-logo"/></p>
      <HeroHeader>A DESIGN SYSTEMS CONFERENCE</HeroHeader>
      <HeroText>
        MARCH 14th – 15th, 2018<br/>
        IN HELSINKI, FINLAND
      </HeroText>
      <Button>
        Purchase Tickets
      </Button>
    </Hero>
        
        <Section isInverted>
          <SectionHeader isInverted>A two-day conference with one day of keynotes & one day of workshops.</SectionHeader>
          <SectionText isInverted>DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
Sounds good? Make sure you familiarize yourself with our code of conduct.</SectionText>
        </Section>
        <Section>
          <SectionHeader>Keynotes, talks and workshops from the fore-front of Design Systems.</SectionHeader>
          <SectionText>DSCONF has 4 long, and 6 shorter speeches during the conference day. We are aiming to bring abundance of tangible information to attendees with real cases and learnings. The second day of DSCONF is dedicated to workshops. There is a total number of 5 workshops, and you can purchase them separately. The workshops are either half-day or full-day.</SectionText>
        </Section>

        <TeamMember
        name="Nathan Curtis"
        title="Co-Founder of EightShapes"
        avatar={avatar} />
        
        
        
    </div>
  )
}

export default Home
