import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Home/About'
import Section from '../components/General/Section'

const Home = () => (
  <Page path="/">
    <HeroSection>
      <Box>
        <Container>
          <h2>Freedom to organize</h2>
          <h4>Aragon lets you freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, or communities.</h4>
          <a>Discover the procuct ></a>
        </Container>
        <Container>
          <span></span>
        </Container>
      </Box>
    </HeroSection>
    <About/>
  </Page>
)

const HeroSection = styled(Section)`
  background-color: #1c1d23;
  min-height: 550px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-family: 'GraphikLink',sans-serif;
    font-size: 20px;
    color: #22e0ff;
    border: solid 0px transparent;
    background: transparent;
    line-height: 1.75;
    padding: 0;
    margin-top: 30px!important;
    display: block;
    text-align: left;
    cursor: pointer;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  h2, h4 {
    text-align: left;
    color: white;
    opacity: 0.8;
  }
`;
export default Home
