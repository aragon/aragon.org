import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>The Aragon Network encompasses a set of courts, which can be used to settle disputes. By using decentralized organizations and smart contracts, we want cases to be closed exponentially faster than how it works in traditional courts.</p>);
const mudule2Content = (<p>Mom probably advised you not to interact with Internet strangers. Not anymore. Thanks to the Aragon Network, you can transact with pseudonymous parties, or staying pseudonymous yourself.</p>);
const mudule3Content = (<p>When starting an agreement with someone on the Aragon Network, you can agree with the other party on a minimum and maximum amount of tokens. That pool of tokens will be taken away by the court in case of disputes, to penalize bad behaviour and insure good one.</p>);
const mudule4Content = (<p>The Aragon Network is not only a digital jurisdiction, but one in which you can make your voice heard. The Aragon Network will be community-governed, just like Aragon itself.</p>);

const NetworkContent = () => (
  <Section>
    <Container>
      <Card imageUrl={'Network/assets/network1'} title="Effective dispute resolution" content={mudule1Content}></Card>
      <Card imageUrl={'Network/assets/network2'} title="Pseudonymity and trust, together" content={mudule2Content}></Card>
      <Card imageUrl={'Network/assets/network3'} title="Insured agreements" content={mudule3Content}></Card>
      <Card imageUrl={'Network/assets/network4'} title="Shape it yourself" content={mudule4Content}></Card>
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

const LongCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${medium('flex-wrap: nowrap;')};
  background-image: linear-gradient(119deg, #faf9f4, #2c86d0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 30px -10% 0 -10%;
  div {
    padding: 15px;
  }

  h5 {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 68px;
    font-weight: 300;
    line-height: 1.82;
    text-align: center;
  }
  h3 {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.33;
    text-align: center;
  }
`

export default NetworkContent
