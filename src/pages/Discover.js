import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Discover/About'
import Section from '../components/General/Section'
import Quotes from '../components/Discover/Quotes'
import Product from '../components/Discover/Product'
import UnstoppableOranizations from '../components/Discover/UnstoppableOranizations'
import video from '../components/Home/home-assets/home-video.mp4'
// import video from '../components/Discover/assets/discover-video.mp4'
import BlogPost from '../components/Discover/BlogPost'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Discover = () => (
  <Page path="/discover">
    <HeroSection>
      <Box>
        <Container>
          <video playsInline autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </Container>
        <Container>
          <h2>Take back your freedom to organize</h2>
          <h4>Discover the unparalleled power to organize. Whether you want to collaborate with your co-founder, open a non-profit, or just organize an online community, Aragon is there for you. </h4>
          <Button.Anchor className="hero-link" mode="strong" href="https://app.aragon.org" target="_blank">Try it out</Button.Anchor>
        </Container>
      </Box>
    </HeroSection>
    <About/>
    <Quotes/>
    <Product/>
    <UnstoppableOranizations/>
    <BlogPost/>
  </Page>
)

const HeroSection = styled(Section)`
  background-image: linear-gradient(290deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  min-height: 550px;
  padding-top: 64px;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
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
    right: calc(50% + 30px);
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
  h2, h4, a {
    text-align: left;
    margin-left: 60px;
  }
`;

export default Discover
