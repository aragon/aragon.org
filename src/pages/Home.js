import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Section from '../components/General/Section'
import video from '../components/Home/home-assets/home-video.mp4'
import { Link } from 'react-static'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)


class Home extends React.Component {

  render() {
    return (
      <Page path="/">
        <Hero/>
        <About/>
      </Page>
    )
  }
}

export default Home
