import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/grants-background.png'
import GrantseContent from '../components/Project/GrantsContent'
import Section from '../components/General/Section'

const Grants = () => (
  <Page path="/project/grants">
    <SecondaryNavbar page="grants"/>
    <GrantsSection>
      <Container>
        <h2>Aragon Nest</h2>
        <h4>Aragon is re-inventing the future of organizations. But we cannot do it alone. <br/>Nest was born to help the ecosystem flourish.</h4>
        <a href="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant" target="_blank"><span>Apply <img src={require(`../components/General/assets/hero-arrow.svg`)}/></span></a>
      </Container>
    </GrantsSection>
    <GrantseContent/>
  </Page>
)

const GrantsSection = styled(Section)`
  height: 550px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
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

export default Grants
