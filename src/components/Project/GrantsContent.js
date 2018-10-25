import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>Aragon Nest is run in the open. That way, we ensure we remain transparent to our community and the grant recipients and applicants. Everything going on in Nest is reflected in GitHub.</p>);
const mudule2Content = (<p>We are looking for people that want to help the Aragon and Ethereum ecosystems advance. If you believe you have a proposal or an application for the program, read more and apply.</p>);

const About = () => (
  <Section>
    <Container>
      <LongCard textAlign="center" color="#b4b5cc" gradient="radial-gradient(circle at 99% 100%, #1c1d23, #2d2e39)" colorWhite title="A thriving ecosystem"></LongCard>
      <Card imageUrl={'Project/assets/governance2'} title="Fully transparent" content={mudule1Content}></Card>
      <Card imageUrl={'Home/assets/home4'} title="Apply now" content={mudule2Content}></Card>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 50% 50%; grid-template-rows: 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
