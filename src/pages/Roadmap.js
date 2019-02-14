import React from 'react';
import styled from 'styled-components';
import {Page} from '../components';
import SecondaryNavbar from '../components/Project/SecondaryNavbar';
import RoadmapContent from '../components/Project/RoadmapContent';
import Section from '../components/General/Section';
import backgroundImage from '../components/Project/assets/roadmap-background.png';
import {Button} from '@aragon/ui';

const Roadmap = () => (
  <Page path="/project/roadmap">
    <SecondaryNavbar page="roadmap" />
    <Hero>
      <Container>
        <h2>Roadmap</h2>
        <h4>
          We want to build the best ecosystem for decentralized organizations
          together. To share insights into our priorities, we publish Aragon
          2019 Product Roadmap. This roadmap is a rough estimate of what we’re
          focused on building in the near, medium and long term.
        </h4>
      </Container>
    </Hero>
    <RoadmapContent />
  </Page>
);

const Hero = styled(Section)`
  height: 550px;
  background-color: #fbf2e8;
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
