import React from 'react'
import styled from 'styled-components'
import background from './assets/hero-bg.svg'
import backgroundMobile from './assets/hero-mobile.svg'
import Navbar from './Navbar'

import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Hero = () => (
  <HeroSection>
    <Navbar />
    <Container />
  </HeroSection>
)

const HeroSection = styled.section`
  min-height: 600px;
  background-color: #019fe3;
  background-image: url(${background});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-position: 45% 100%;
  @media (max-width: 683px) {
    background-image: url(${backgroundMobile});
    background-size: contain;
    background-position: center;
    height: 135vw;
  }
  height: auto;
  ${medium('height: 47vw; background-size: contain;')};
  margin-bottom: -3px;
`

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  padding-top: 50px;

  ${medium('padding-top: 200px;')};
`
export default Hero
