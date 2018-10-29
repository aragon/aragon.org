import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { Link } from 'react-static'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>Aragon organizations are digital natives. They live on Ethereum, a ledger secured by incentives and cryptography. No one can take your organization away from you.</p>);
const mudule2Content = (<p>Aragon leverages smart contracts. They are like traditional contracts, but written in computer code and enforced by the blockchain. As efficient and automatic as it gets.</p>);
const mudule3Content = (<p>Aragon organizations are global from day one. Collaborate with people across countries or continents, without incurring into cumbersome bureau-crazy.</p>);
const mudule4Content = (<p>With Aragon, you don’t need to pick a one-size-fits-all solution.<br />You can experiment with new kinds of human collaboration, just with a few clicks.</p>);

const About = () => (
  <Section>
    <Container>
      <Card imageUrl={'Discover/assets/discover1'} title="21st century organizations" content={mudule1Content}></Card>
      <Card imageUrl={'Discover/assets/discover2'} title="Organizations that work for you" content={mudule2Content}></Card>
      <LongCard background={'Discover/assets/background-discover1.png'} image={'Discover/assets/discover5.svg'} textAlign="right" title="Global and bureaucracy-free" content={mudule3Content}></LongCard>
      <LongCard background={'Discover/assets/background-discover2.png'} image={'Discover/assets/discover6.svg'} textAlign="left" colorWhite title="Fully customizable" content={mudule4Content}></LongCard>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 50% 50%; grid-template-rows: 500px 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
