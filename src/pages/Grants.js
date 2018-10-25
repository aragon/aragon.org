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
      <Container></Container>
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
`;

export default Grants
