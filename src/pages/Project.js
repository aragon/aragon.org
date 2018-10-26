import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Project/About'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/hero-background.png'
import Section from '../components/General/Section'

import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Project = () => (
  <Page path="/project">
    <SecondaryNavbar/>
    <HeroSection>
      <Box>
        <Container>
          <h2>Fight for freedom</h2>
          <h4>Aragon is a project to empower freedom by creating tools for decentralized organizations to thrive.</h4>
          <a href="https://app.aragon.org" target="_blank"><span>Manifesto <img src={require(`../components/General/assets/hero-arrow.svg`)}/></span></a>
        </Container>
        <Container>
          <iframe src="https://www.youtube-nocookie.com/embed/AqjIWmiAidw?rel=0&amp;ecver=2" frameBorder="0" allow="autoplay; encrypted-media"  allowFullScreen></iframe>
        </Container>
      </Box>
    </HeroSection>
    <About/>
  </Page>
)

const HeroSection = styled(Section)`
  height: 550px;
  background: #faf7ec;
  background-image: url(${backgroundImage});
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  a, button {
    font-family: 'GraphikLink',sans-serif;
    font-size: 20px;
    text-align: left;
    color: #22e0ff;
    border: solid 0px transparent;
    background: transparent;
    line-height: 1.75;
    padding: 0;
    margin-top: 30px;
    display: block;
    font-weight: 500;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 100%;
  h2, h4 {
    text-align: left;
  }
  iframe {
    width: 90%;
    margin-left: 10%;
    border-radius: 21px;
    height: 238px;
  }
`;


export default Project
