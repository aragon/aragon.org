import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { Link } from 'react-static'

import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <span>
    <p>We are a community with the mission to empower freedom by creating tools for decentralized organizations to thrive.</p>
    <p><Link to="/project" className="action-button"><span>About <img src={require(`../General/assets/arrow.svg`)}/></span></Link></p>
  </span>
);
const mudule2Content = (
  <span>
    <p>Aragon enables developers and designers to create apps that enhance human collaboration. Build the future of decentralized organizations with aragonSDK.</p>
    <p><a className="action-button" href="https://hack.aragon.org/" target="_blank"><span>Developers <img src={require(`../General/assets/arrow.svg`)}/></span></a></p>
  </span>
);
const mudule3Content = (
  <span>
    <p>Aragon is creating a whole stack of decentralized technologies that merge seamlessly inside people’s everyday lives. Aragon Nest, our grants program, is bringing it to reality.</p>
    <p><Link to="project/grants"className="action-button"><span>Nest <img src={require(`../General/assets/arrow.svg`)}/></span></Link></p>
  </span>
);
const mudule4Content = (
  <span>
    <p>Our community is always looking for individuals who want to help our fight for freedom. Check out how to contribute or check open positions.</p>
    <p><Link to="project/contribute" className="action-button"><span>Contribute <img src={require(`../General/assets/arrow.svg`)}/></span></Link></p>
  </span>
);
const mudule5Content = (
  <span>
    <p>Aragon organizations are not only great because they are decentralized, global and unstoppable. They will also benefit from the Aragon Network, the world’s first digital jurisdiction.</p>
    <p><Link to="/network" className="action-button"><span>Aragon Network <img src={require(`../General/assets/arrow.svg`)}/></span></Link></p>
  </span>
);

const About = () => (
  <Section>
    <Container>
      <Card linkTo="/project" imageUrl={'Home/home-assets/home1'} title="On a fight for freedom" content={mudule1Content}></Card>
      <Card linkTo="https://hack.aragon.org/" imageUrl={'Home/home-assets/home2'} title="Build human collaboration" content={mudule2Content}></Card>
      <LongCard linkTo="/network" background={'Home/home-assets/background-home1.png'} image={'Home/home-assets/home5.png'} textAlign="left" colorWhite title="The world’s first digital jurisdiction" content={mudule5Content}></LongCard>
      <Card linkTo="/project/contribute"  imageUrl={'Home/home-assets/home3'} title="Nest, our grants program" content={mudule3Content}></Card>
      <Card linkTo="/network"  imageUrl={'Home/home-assets/home4'} title={(<span>Join <br/>the fight</span>)} content={mudule4Content}></Card>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 50% 50%; grid-template-rows: 500px 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
