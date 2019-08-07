import React from 'react';
import styled from 'styled-components';
import {Page} from '../components';
import SecondaryNavbar from '../components/Project/SecondaryNavbar';
import AragonClient from '../components/Project/AragonClient';
import AragonNetwork from '../components/Project/AragonNetwork';
import FeedbackModule from '../components/Project/FeedbackModule';
import Section from '../components/General/Section';
import backgroundImage from '../components/Project/assets/roadmap-cover.svg';
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
  height: 40px;
  width: 100%;
`

const Tabs = styled.div`
  width: 80%;
  margin: auto;
  background: transparent;
  display: flex;
  line-height: 50px;
  margin-top: -25px;
  position: relative;
  box-sizing: border-box;

  div {
    color: #2d4051;
    background: #e6e9ef;
    font-size: 18px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    border: 1px solid rgba(151, 151, 151, 0.16103);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0245131);
    transition: all 0.25s ease-in-out;
  }
  div.active,
  div:hover {
    background: white;
  }
  div.left {
    border-radius: 6px 0 0 6px;
  }
  div.right {
    border-radius: 0 6px 6px 0;
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
