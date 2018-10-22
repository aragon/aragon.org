import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Text, Button, breakpoint } from '@aragon/ui'

const medium = css => breakpoint('medium', css);


const About = () => (
  <Section>
    <Container>
      <Card></Card>
      <Card></Card>
      <LongCard></LongCard>
      <Card></Card>
      <Card></Card>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 500px 500px 500px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
