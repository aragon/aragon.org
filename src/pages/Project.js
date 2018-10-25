import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Project/About'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/hero-background.png'

const Project = () => (
  <Page path="/project">
    <SecondaryNavbar/>
    <Section>
      <Container></Container>
    </Section>
    <About/>
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
`;

export default Project
