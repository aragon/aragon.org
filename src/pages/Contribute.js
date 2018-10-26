import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import ContributeeContent from '../components/Project/ContributeContent'

const Contribute = () => (
  <Page path="/project/contribute">
    <SecondaryNavbar/>
    <Section>
      <Container>
        <h2>The community awaits you</h2>
        <h4>The Aragon community is united towards the same goal: to re-shape the future of organizations.</h4>
        <a>Manifesto ></a>
      </Container>
    </Section>
    <ContributeeContent/>
  </Page>
)

const Section = styled.section`
  height: 550px;
  background-color: #fbf2e8;
`;

const Container = styled.div`
  background-color: #fbf2e8;
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
`;

export default Contribute
