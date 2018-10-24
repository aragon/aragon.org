import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Project/About'
import backgroundImage from '../components/Project/assets/hero-background.png'

const Discover = () => (
  <Page path="/project">
    <Section>
      <Container></Container>
    </Section>
    <About/>
  </Page>
)

const Section = styled.section`
  height: 750px;
  padding-top: 64px;
  background: #faf7ec;
`;

const Container = styled.div`
  background-image: url(${backgroundImage});
  height: 100%;
  width: 100%;
`;

export default Discover
