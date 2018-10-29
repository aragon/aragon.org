import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import Quote from '../General/Quote'

import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const Quotes = () => (
  <QuoteSection>
    <h2>A new era for organizations</h2>
    <Box>
      <Quote image={'Discover/assets/quote1.png'} title="Mike Crason" content="I’m using Aragon to create my non-profit. Thanks to Aragon, all my finances are public so my donors can check how we spend funds and how we are helping others. Anyone can donate with just a couple clicks."/>
      <Quote image={'Discover/assets/quote2.png'} title="Laura Smith" content="Aragon is perfect for open source projects. Traditional organizations just aren’t ready for digital communities. With Aragon, I can easily add and reward my contributors, making my project sustainable."/>
    </Box>
    <p className="link">
      <a className="hero-link" href="http://aragon.aragonpm.com/#/ngo.aragonid.eth" target="_blank">
        <span>Check an example Aragon organization <img src={require(`../General/assets/hero-arrow.svg`)}/></span>
      </a>
    </p>
  </QuoteSection>
);

const QuoteSection = styled(Section)`
  background-image: linear-gradient(289deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  p.link, a.hero-link {
    text-align: center;
    margin-bottom: 30px;
    color: #1eb8d1;
  }
`
const Box = styled.div`
  display: grid;
  ${medium('grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 250px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background: transparent;
  margin: 60px auto 30px auto;
`

export default Quotes
