import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>Aragon is creating a whole stack of decentralized technologies that merge seamlessly inside people’s everyday. Aragon Nest, our grants program, helps bring it to reality.</p>);
const mudule2Content = (<p>Our community is always looking for individuals who want to help our fight for freedom. Check out how to contribute or check open positions.</p>);

const About = () => (
  <Section>
    <Container>
      <Card imageUrl={'Project/assets/project1'} title="Nest, our grants program" content={mudule1Content}></Card>
      <Card imageUrl={'Project/assets/project2'} title={(<span>Join<br/> the fight</span>)} content={mudule2Content}></Card>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 50% 50%;')};
  grid-template-columns: 100%;
  grid-template-rows: 500px 500px 500px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
