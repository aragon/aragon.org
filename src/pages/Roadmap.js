import React from 'react';
import styled from 'styled-components';
import {Page} from '../components';
import SecondaryNavbar from '../components/Project/SecondaryNavbar';
import AragonClient from '../components/Project/AragonClient';
import AragonNetwork from '../components/Project/AragonNetwork';
import FeedbackModule from '../components/Project/FeedbackModule';
import Section from '../components/General/Section';
import backgroundImage from '../components/Project/assets/roadmap.svg';
import {Button} from '@aragon/ui';

class Roadmap extends React.Component {
  state = {active: 'left'};

  render() {
    const {active} = this.state;
    return (
      <Page path="/project/roadmap">
        <Hero>
          <Container>
            <h2>Roadmap</h2>
            <h4>
              As a community-driven project, we want to share our roadmap with
              the world.
              <br />
              You can filter by product, and also by development team.
            </h4>
          </Container>
        </Hero>
        <SecondaryNavbar page="roadmap" />
        <TabsSeparator />
        <Tabs>
          <div
            className={active !== 'left' ? 'left' : 'active left'}
            onClick={() => this.setState({active: 'left'})}>
            Aragon Client
          </div>
          <div
            className={active == 'left' ? 'right' : 'active right'}
            onClick={() => this.setState({active: 'right'})}>
            Aragon Network
          </div>
        </Tabs>
        {active === 'left' ? <AragonClient /> : <AragonNetwork />}
        <FeedbackModule />
      </Page>
    );
  }
}
const TabsSeparator = styled.div`
  background: white;
  height: 53px;
  width: 100%;
`

const Tabs = styled.div`
  width: 80%;
  max-width: 1050px;
  margin: auto;
  background: transparent;
  display: flex;
  line-height: 50px;
  margin-top: -25px;
  position: relative;
  box-sizing: border-box;

  div {
    background: #F9FAFC;
    font-size: 18px;
    font-family: 'FontMedium', sans-serif;
    color: #1C242D;
    text-align: center;
    width: 50%;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0726053);
    transition: all 0.25s ease-in-out;
  }
  div:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1426053);
    background: white;
  }
  div.active {
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0726053);
  }
  div.left {
    border-radius: 12px 0 0 12px;
    border-right: 1px solid rgba(151, 151, 151, 0.16103);
  }
  div.right {
    border-left: 1px solid rgba(151, 151, 151, 0.16103);
    border-radius: 0 12px 12px 0;
  }
`;

const Hero = styled(Section)`
  height: 550px;
  background-color: rgb(207, 213, 234);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top:64px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Roadmap;
