import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/governance-background.png'
import GovernanceContent from '../components/Project/GovernanceContent'
import Section from '../components/General/Section'
import { Button } from '@aragon/ui'

const Governance = () => (
  <Page path="/project/governance">
    <SecondaryNavbar page="governance"/>
    <GovernanceSection>
      <Container>
        <h2>Power to the people</h2>
        <h4>Aragon is all about empowering people, starting with our own community.<br/>The project is community-governed, and we are committed on decentralizing power.</h4>
        <Button.Anchor className="hero-link" mode="strong" href="https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/" target="_blank">Manifesto</Button.Anchor>
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
  overflow: hidden;
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
`;

export default Governance
