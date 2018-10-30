import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import Quote from '../General/Quote'

import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const Quotes = () => (
  <QuoteSection>
    <h2>Our eaglets</h2>
    <Box>
      <Quote image={'Discover/assets/quote1.png'} title="Olivier Sarrouy" content="Entering the Aragon Nest program is not (only) about getting funded. It is about entering a community whose every member is committed to help every others to pursue a common goal: working toward the decentralization of human worlds."/>
      <Quote image={'Discover/assets/quote2.png'} title="Yalda Mousavinia" content="Every time I scroll through @AragonProject's github repo for Nest it makes me so inspired about the future. What is happening here is next level and it will become even more next level as more organizations cross-pollinate here. Stoked to be in the Nest."/>
    </Box>
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
