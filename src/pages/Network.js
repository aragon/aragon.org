import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'

const Home = () => (
  <Page path="/network">
    <Section/>
  </Page>
)

const Section = styled.section`
  background-color: #1c1d23;
  min-height: 550px;
  padding-top: 64px;
`;

export default Home
