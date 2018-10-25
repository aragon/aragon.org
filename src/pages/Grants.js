import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/grants-background.png'
import GrantseContent from '../components/Project/GrantsContent'

const Grants = () => (
  <Page path="/project/grants">
    <SecondaryNavbar/>
    <Section>
      <Container>
        <h2>Aragon Nest</h2>
        <h4>Aragon is re-inventing the future of organizations. But we cannot do it alone. <br/>Nest was born to help the ecosystem flourish.</h4>
      </Container>
    </Section>
    <GrantseContent/>
  </Page>
)

const Section = styled.section`
  height: 550px;
  background: #faf7ec;
`;

const Container = styled.div`
  background-image: url(${backgroundImage});
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Grants
