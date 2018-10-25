import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { Link } from 'react-static'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>Creating a democratic organization is as easy as selecting the Democracy template. Votes are fully secure and tamper-proof. You can now empower entire communities.</p>);
const mudule2Content = (<p>Aragon leverages smart contracts. Smart contracts are like traditional contracts, but written in computer code and enforced by the blockchain. As efficient and automatic as it gets.</p>);
const mudule3Content = (<p>Aragon organizations are fully modular. You can install apps that enhance your organization. Maybe you want a different voting process, or a different way to manage funds.</p>);

const About = () => (
  <Section>
    <Container>
      <Card imageUrl={'Discover/assets/discover3'} title="Democratic, if you want them to be" content={mudule1Content}></Card>
      <Card imageUrl={'Discover/assets/discover4'} title={(<span>Built-in <br/>transparency</span>)} content={mudule2Content}></Card>
      <LongCard image={'Discover/assets/discover7.png'} textAlign="left" title="A universe of apps" content={mudule3Content} background=""></LongCard>
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
