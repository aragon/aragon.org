import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import NetworkeContent from '../components/Network/NetworkContent'
import Section from '../components/General/Section'
import backgroundImage from '../components/Network/assets/network-background.png'
import { Button } from '@aragon/ui'

const Network = () => (
  <Page path="/network">
    <NetworkSection>
      <Container>
        <h2>The world’s first digital jurisdiction</h2>
        <h4>Decentralized organizations change the way we think about organizations. <br/>The Aragon Network will change the way you think about jurisdictions and governments.</h4>
        <Button.Anchor className="hero-link" mode="strong" href="https://github.com/aragon/whitepaper" target="_blank">Whitepaper</Button.Anchor>
      </Container>
    </NetworkSection>
    <NetworkeContent/>
  </Page>
)

const NetworkSection = styled(Section)`
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
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2, h4 {
    color: white;
  }
`;

export default Network
