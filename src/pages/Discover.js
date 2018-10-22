import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Discover/About'

const Discover = () => (
  <Page path="/discover">
    <Section/>
    <About/>
  </Page>
)

const Section = styled.section`
  background-image: linear-gradient(290deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  min-height: 550px;
  padding-top: 64px;
`;

export default Discover
