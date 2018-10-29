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
    <p>We care a great deal about governance. That’s why we have created the Aragon Governance Proposals. You can vote on them, or create your own with our governance process.</p>
    <p>
      <a className="action-button" target="_blank" href="https://forum.aragon.org/t/request-for-comment-agp-1-the-aragon-governance-proposal-process/233">
        <span>Governance process <img src={require(`../General/assets/arrow.svg`)}/></span>
      </a>
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>All our finances are public. You can read how we spend every cent. Being transparent is part of our commitment to our community.</p>
    <p>
      <a className="action-button" href="https://transparency.aragon.org" target="_blank">
        <span>Transparency portal <img src={require(`../General/assets/arrow.svg`)}/></span>
      </a>
    </p>
  </span>
);
const module3Content = (
  <span>
    <p>We are committed to transitioning Aragon into a fully decentralized organization. That organization will become the Aragon Network.</p>
    <p>
      <Link to="/network" className="action-button">
        <span>Aragon network <img src={require(`../General/assets/arrow.svg`)}/></span>
      </Link>
    </p>
  </span>
);

const About = () => (
  <Section>
    <Container>
      <Card linkTo="https://forum.aragon.org/t/request-for-comment-agp-1-the-aragon-governance-proposal-process/233" imageUrl={'Project/assets/governance1'} title="Empowering participation" content={mudule1Content}></Card>
      <Card linkTo="https://transparency.aragon.org" imageUrl={'Project/assets/governance2'} title={(<span>Transparent <br/> finances</span>)} content={mudule2Content}></Card>
      <LongCard linkTo="/network" image={'Project/assets/governance3.png'} textAlign="left" color="#b4b5cc" background="Home/home-assets/background-home1.png" colorWhite title="A decentralized organization" content={module3Content}></LongCard>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
