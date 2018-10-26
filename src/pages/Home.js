import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Home/About'
import Section from '../components/General/Section'
import video from '../components/Home/home-assets/home-video.mp4'

import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Home = () => (
  <Page path="/">
    <HeroSection>
      <Box>
        <Container>
          <h2>Freedom to organize</h2>
          <h4>Aragon lets you freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, or communities.</h4>
          <a className="hero-link"><span>Discover the procuct <img src={require(`../components/General/assets/hero-arrow.svg`)}/></span></a>
        </Container>
        <Container>
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        </Container>
      </Box>
    </HeroSection>
    <About/>
  </Page>
)

const HeroSection = styled(Section)`
  background-color: #1c1d23;
  min-height: 650px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  video {
    width: 40%;
    right: 0;
    position: absolute;
    bottom: 0;
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
    color: white;
    opacity: 0.8;
  }
`;
export default Home
