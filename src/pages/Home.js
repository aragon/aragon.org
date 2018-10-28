import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Home/About'
import Section from '../components/General/Section'
import video from '../components/Home/home-assets/home-video.mp4'
import { Link } from 'react-static'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)


const Home = () => (
  <Page path="/">
    <HeroSection>
      <Box>
        <Container>
          <h2>Freedom to organize</h2>
          <h4>Aragon lets you freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, or communities.</h4>
          <Button.Anchor className="hero-link" mode="strong" href="./discover" target="_blank">Discover the procuct</Button.Anchor>
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
    width: auto;
    display:none;
    @media (min-width: 900px) and (max-width: 1071px) {
      display: block;
      height: 300px;
    }
    @media (min-width: 1071px) and (max-width: 1176px) {
      display: block;
      height: 350px;
    }
    @media (min-width: 1176px) and (max-width: 1330px) {
      display: block;
      height: 400px!important;
    }
    @media (min-width: 1330px) {
      display: block;
      height: 450px;
    }
    position: absolute;
    bottom: 0;
    margin-left: 28px;
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
