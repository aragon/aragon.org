import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Discover/About'
import Features from '../components/Discover/Features'
import Section from '../components/General/Section'
import Product from '../components/Discover/Product'
import UnstoppableOranizations from '../components/Discover/UnstoppableOranizations'
import Hero from '../components/Discover/Hero'
import BlogPost from '../components/Discover/BlogPost'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Discover = () => (
  <Page path="/discover" color="black">
    <Hero />
    <About />
    <UnstoppableOranizations />
    <Features />
    <Product />
    <BlogPost />
  </Page>
)

const HeroSection = styled(Section)`
  height: auto;
  ${medium('height: 600px;')};

  background: linear-gradient(304deg, #95bbce, #c5d0e6, #e7e4f6);
  background-size: 400% 400%;
  -webkit-animation: HeroAnimation 7s ease infinite;
  -moz-animation: HeroAnimation 7s ease infinite;
  animation: HeroAnimation 7s ease infinite;

  overflow: hidden;
  min-height: 550px;
  padding-top: 64px;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  video {
    max-width: 100%;
    width: auto;
    margin-left: 10px;
    @media (min-width: 900px) and (max-width: 1071px) {
      display: block;
      height: 300px;
      margin-left: 10px;
    }
    @media (min-width: 1071px) and (max-width: 1176px) {
      display: block;
      height: 430px;
      margin-left: -20px;
    }
    @media (min-width: 1176px) and (max-width: 1330px) {
      display: block;
      height: 500px !important;
      margin-left: -60px;
    }
    @media (min-width: 1330px) {
      display: block;
      height: 550px;
      margin-left: -30px;
    }
  }
`
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`
const Container = styled.div`
  width: 100%;
  h2,
  h4,
  a {
    text-align: left;
    margin-left: 0px;
    ${medium('margin-left: 60px;')};
  }
`

export default Discover
