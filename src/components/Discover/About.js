import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Text, Button, breakpoint } from '@aragon/ui'


const medium = css => breakpoint('medium', css);
const mudule1Content = (<p>Aragon organizations are digital natives. They live on Ethereum, a global ledger secured by economic incentives and cryptography. No one can take your organization away from you.</p>);
const mudule2Content = (<p>Aragon leverages smart contracts. Smart contracts are like traditional contracts, but written in computer code and enforced by the blockchain. As efficient and automatic as it gets.</p>);

const About = () => (
  <Section>
    <Container>
      <Card imageUrl={'Discover/assets/discover1'} title="21st century organizations" content={mudule1Content}></Card>
      <Card imageUrl={'Discover/assets/discover2'} title="Organizations that work for you" content={mudule2Content}></Card>
      <LongCard background={'Discover/assets/background-discover1.png'}></LongCard>
      <LongCard background={'Discover/assets/background-discover2.png'}></LongCard>
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
