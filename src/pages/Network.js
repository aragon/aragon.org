import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import NetworkeContent from '../components/Network/NetworkContent'

const Network = () => (
  <Page path="/project/grants">
    <Section>
      <Container>
        <h2>The world’s first digital jurisdiction</h2>
        <h4>Decentralized organizations change the way we think about organizations. <br/>The Aragon Network will change the way you think about jurisdictions and governments.</h4>
        <a>Whitepaper ></a>
      </Container>
    </Section>
    <NetworkeContent/>
  </Page>
)

const Section = styled.section`
  height: 550px;
  background: #faf7ec;
`;

const Container = styled.div`
  background-color: #1c1d23;
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    font-family: 'GraphikLink',sans-serif;
    font-size: 20px;
    color: #22e0ff;
    border: solid 0px transparent;
    background: transparent;
    line-height: 1.75;
    padding: 0;
    margin-top: 90px!important;
    display: block;
    text-align: center;
    cursor: pointer;
  }
  h2, h4 {
    color: white;
  }
`;

export default Network
