import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>We care a great deal about governance. That’s why we have created the Aragon Governance Proposals. You can vote on them, or create your own with our governance process.</p>);
const mudule2Content = (<p>All our finances are public. You can read how we spend every cent. Being transparent is part of our commitment to our community.</p>);
const module3Content = (<p>We are committed to transitioning Aragon into a fully decentralized organization. That organization will become the Aragon Network.</p>)

const About = () => (
  <Section>
    <Container>
      <Card imageUrl={'Project/assets/governance1'} title="Empowering participation" content={mudule1Content}></Card>
      <Card imageUrl={'Project/assets/governance2'} title={(<span>Transparent <br/> finances</span>)} content={mudule2Content}></Card>
      <LongCard image={'Project/assets/governance3.png'} textAlign="left" color="#b4b5cc" background="Home/assets/background-home1.png" colorWhite title="A decentralized organization" content={module3Content}></LongCard>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 50% 50%; grid-template-rows: 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
