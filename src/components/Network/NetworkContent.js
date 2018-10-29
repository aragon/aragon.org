import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>The Aragon Network encompasses a set of courts, which can be used to settle disputes. By using smart contracts, cases can be closed exponentially faster than in traditional courts.</p>);
const mudule2Content = (<p>Mom probably advised you not to interact with strangers. But thanks to the Aragon Network, you can transact with people who are using aliases, or stay anonymous yourself. You are in control and can open disputes if someone misbehaves.</p>);
const mudule3Content = (
  <span>
    <p>You can agree on a minimum and maximum deposit of tokens upon creating a new agreement on the Aragon Network. These deposits can be used to penalize bad behaviour in the Network court, warranting good behaviour.</p>
    <p>
      <a className="action-button" target="_blank" href="https://github.com/aragon/whitepaper">
        <span>Whitepaper <img src={require(`../General/assets/arrow.svg`)}/></span>
      </a>
    </p>
  </span>
);
const mudule4Content = (
  <span>
    <p>The Aragon Network is not only a digital jurisdiction, but one in which you can make your voice heard. The Aragon Network will be community-governed, just like the project itself.</p>
    <p>
      <a className="action-button" target="_blank" href="https://forum.aragon.org">
        <span>Aragon forum <img src={require(`../General/assets/arrow.svg`)}/></span>
      </a>
    </p>
  </span>
);

const NetworkContent = () => (
  <Section>
    <Container>
      <Card imageUrl={'Network/assets/network1'} title="Effective dispute resolution" content={mudule1Content}></Card>
      <Card imageUrl={'Network/assets/network2'} title="Anonymity and trust, together" content={mudule2Content}></Card>
      <Card linkTo="https://github.com/aragon/whitepaper" imageUrl={'Network/assets/network3'} title="Insured agreements" content={mudule3Content}></Card>
      <Card linkTo="https://forum.aragon.org" imageUrl={'Network/assets/network4'} title="Shape it yourself" content={mudule4Content}></Card>
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

export default NetworkContent
