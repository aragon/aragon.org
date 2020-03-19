import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero'
import Camino from '../components/Home/Camino'
import Court from '../components/Home/Court'
import Product from '../components/Home/Product'
import About from '../components/Home/About'
import UseCases from '../components/Home/UseCases'
import Organizations from '../components/Home/Organizations'
import Powered from '../components/Home/Powered'
import Section from '../components/General/Section'
import { Link } from 'react-static'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

class Home extends React.Component {
  render() {
    return (
      <Page path="/" color="black">
        <Hero />
        <Product />
        <About />
        <Powered />
        <Court />
        <Organizations />
      </Page>
    )
  }
}

export default Home
