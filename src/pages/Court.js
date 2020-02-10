import React from 'react'
import { Page } from '../components'
import About from '../components/Court/About'
import Hero from '../components/Court/Hero'
import Subscribe from '../components/Court/Subscribe'
const Court = () => (
  <Page path="/aragon-court" color="black">
    <Hero />
    <About />
    <Subscribe />
  </Page>
)

export default Court
