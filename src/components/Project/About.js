import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import history from './assets/history.svg'
import mobileHistory from './assets/history-mobile.svg'
import { Link } from 'react-static'
import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <span>
    <p>Aragon is creating a whole stack of decentralized technologies that merge seamlessly inside people’s everyday. Aragon Nest helps bring it to reality.</p>
    <p>
      <Link className="action-button" to="/project/grants">
        <span>Discover Nest <img src={require(`../General/assets/arrow.svg`)}/></span>
      </Link>
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>Our community is always looking for individuals who want to help our fight for freedom. Check out how to contribute or check open positions.</p>
    <p>
      <Link className="action-button" to="/project/contribute">
        <span>Contribute <img src={require(`../General/assets/arrow.svg`)}/></span>
      </Link>
    </p>
  </span>
);
const module3Content = (<p>The Aragon Project was born to disintermediate the creation and maintenance of organizations. Everyone should have equal access to governance and collaboration, no matter of their race, gender or age. The project was originally started by Luis Cuende and Jorge Izquierdo in November 2016.</p>);
const module4Content = (
  <span>
    <p>We have a strong commitment to decentralize our own governance. The community will have control over the project’s future.</p>
    <p>
      <Link className="action-button" to="/project/governance">
        <span>Governance <img src={require(`../General/assets/arrow.svg`)}/></span>
      </Link>
    </p>
  </span>
);
const HistoryContainer = (
  <LongCardContainer>
    <DateBox className="yellow"/>
    <Label className="yellow">Aragon was born</Label>
    <DateBox className="green"/>
    <Label className="green">Aragon 0.1</Label>
    <DateBox className="green"/>
    <Label className="green">Aragon Network token sale</Label>
    <DateBox className="violet"/>
    <Label className="violet">Aragon 0.5 “The Architect”</Label>
    <DateBox className="violet"/>
    <Label className="violet">Aragon 0.6 and mainnet launch</Label>
  </LongCardContainer>
);

const About = () => (
  <Section>
    <Container>
      <LongCard textAlign="center" background="" title="Our history" content={module3Content} gradient="linear-gradient(292deg, #95bbce, #c5d0e6 46%, #e7e4f6)">
        <BreakPoint to="medium">
          <HistoryImage src={mobileHistory} />
        </BreakPoint>
        <BreakPoint from="medium">
          <HistoryImage src={history} />
        </BreakPoint>
      </LongCard>
      <LongCard linkTo="/project/governance" textAlign="right" color="#b4b5cc" image={'Project/assets/project3.png'} background="" colorWhite title="Governed by the community" content={module4Content} gradient="radial-gradient(circle at 99% 100%, #1c1d23, #2d2e39)"></LongCard>
      <Card linkTo="/project/grants" imageUrl={'Project/assets/project1'} title="Nest, our grants program" content={mudule1Content}></Card>
      <Card linkTo="/project/contribute" imageUrl={'Project/assets/project2'} title={(<span>Join<br/> the fight</span>)} content={mudule2Content}></Card>
    </Container>
  </Section>
);

const LongCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -10%;
`
const HistoryImage = styled.img`
  margin: 30px -8% 0 -8%;
  max-width: 120%;
`
const Label = styled.div`
  font-family: 'GraphikLink', sans-serif;
  font-size: 13px;
  line-height: 0.97;
  text-align: center;
  color: #7f8198;
  border-radius: 25px;
  box-shadow: 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.05);
  margin: 60px 0 0 0;
  padding: 5px 15px;

  &.yellow {
    background-image: linear-gradient(96deg, #faf9f4, #f9f5de);
  }
  &.violet {
    background-color: #ebe4ff;
  }
  &.green {
    background-image: linear-gradient(205deg, #c4e5df, #d4efe6);
  }
`
const DateBox = styled.div`
  opacity: 0.31;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  margin: 60px 0 0 0;
  &.yellow {
    background-color: #f9f5de;
  }
  &.violet {
    background-color: #ebe4ff;
  }
  &.green {
    background-color: #d4efe6;
  }
`

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
