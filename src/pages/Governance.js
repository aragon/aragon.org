import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/governance-background.png'
import GovernanceContent from '../components/Project/GovernanceContent'
import Section from '../components/General/Section'

const Governance = () => (
  <Page path="/project/governance">
    <SecondaryNavbar page="governance"/>
    <GovernanceSection>
      <Container>
        <h2>Power to the people</h2>
        <h4>Aragon is all about empowering people, starting with our own community.<br/>The project is community-governed, and we are committed on decentralizing power.</h4>
        <a href="https://app.aragon.org" target="_blank"><span>Manifesto <img src={require(`../components/General/assets/hero-arrow.svg`)}/></span></a>
      </Container>
    </GovernanceSection>
    <GovernanceContent/>
  </Page>
)

const GovernanceSection = styled(Section)`
  height: 550px;
  background: #faf7ec;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2, h4 {
    color: white;
  }
  a {
    font-family: 'GraphikLink',sans-serif;
    font-size: 20px;
    color: #22e0ff;
    border: solid 0px transparent;
    background: transparent;
    line-height: 1.75;
    padding: 0;
    margin-top: 90px!important;
    display: block;
    text-align: center;
    cursor: pointer;
  }
`;

export default Governance
