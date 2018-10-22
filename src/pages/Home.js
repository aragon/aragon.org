import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Home/About'

const Home = () => (
  <Page path="/">
    <Section/>
    <About/>
  </Page>
)

const Section = styled.section`
  background-color: #1c1d23;
  min-height: 400px;
  padding-top: 64px;
`;

export default Home
