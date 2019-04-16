import React from 'react'
import styled from 'styled-components'
import Section from '../General/Section'
import video from './home-assets/home-video.mp4'
import { Link } from 'react-static'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)


const Hero = () => (
    <HeroSection>
      <Box>
        <Container>
          <h2>Freedom to <br/>organize</h2>
          <h4>Aragon lets you freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, and communities.</h4>
          <Button.Anchor className="hero-link" mode="strong" href="./discover">Discover the product</Button.Anchor>
        </Container>
        <Container>
          <video playsInline autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </Container>
      </Box>
    </HeroSection>
)

const HeroSection = styled(Section)`
  background-color: #1c1d23;
  min-height: 600px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  video {
    width: auto;
    display:none;
    @media (min-width: 900px) and (max-width: 1071px) {
      display: block;
      height: 300px;
      margin-right: -10px;

    }
    @media (min-width: 1071px) and (max-width: 1176px) {
      display: block;
      height: 350px;
      margin-right: -30px;
    }
    @media (min-width: 1176px) and (max-width: 1330px) {
      display: block;
      height: 400px!important;
      margin-right: -50px;
    }
    @media (min-width: 1330px) {
      display: block;
      height: 450px;
      margin-right: -70px;
    }
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
  h2 {
    font-size: 56px;
    line-height: 75px;
    text-align: left;
    color: white;
    opacity: 1;
  }
  h4 {
    text-align: left;
    color: white;
    opacity: 0.8;
  }
`;
export default Hero
