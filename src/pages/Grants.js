import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/grants-background.png'
import GrantseContent from '../components/Project/GrantsContent'
import GrantsQuotes from '../components/Project/GrantsQuotes'
import Section from '../components/General/Section'
import { Button } from '@aragon/ui'

const Grants = () => (
  <Page path="/project/grants">
    <SecondaryNavbar page="grants"/>
    <GrantsSection>
      <Container>
        <h2 id="nestTitle">Aragon Nest</h2>
        <h4>Aragon is re-inventing the future of organizations. But we cannot do it alone. <br/>Nest was born to help the ecosystem flourish.</h4>
        <Button.Anchor className="hero-link" mode="strong" href="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant" target="_blank">Apply</Button.Anchor>
      </Container>
    </GrantsSection>
    <GrantseContent/>
    <GrantsQuotes/>
  </Page>
)

const GrantsSection = styled(Section)`
  height: 550px;
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
`;

export default Grants
