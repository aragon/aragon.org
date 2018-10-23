import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Discover/About'
import Quotes from '../components/Discover/Quotes'
import Product from '../components/Discover/Product'
import UnstoppableOranizations from '../components/Discover/UnstoppableOranizations'
import BlogPost from '../components/Discover/BlogPost'

const Discover = () => (
  <Page path="/discover">
    <Section/>
    <About/>
    <Quotes/>
    <Product/>
    <UnstoppableOranizations/>
    <BlogPost/>
  </Page>
)

const Section = styled.section`
  background-image: linear-gradient(290deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  min-height: 550px;
  padding-top: 64px;
`;

export default Discover
