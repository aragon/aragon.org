import React from 'react';
import styled from 'styled-components';
import pando from './assets/pando.svg';
import althea from './assets/althea.svg';
import dapp from './assets/dapp.svg';
import melonport from './assets/melonport.svg';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Projects = () => (
  <ProjectsSection>
    <Container>
      <Fade bottom distance="50px">
        <a target="_blank" href="https://althea.org/">
          <img src={althea} />
        </a>
      </Fade>
      <Fade bottom distance="50px" delay={200}>
        <a target="_blank" href="https://dappnode.io/">
          <img src={dapp} />
        </a>
      </Fade>
      <Fade bottom distance="50px" delay={400}>
        <a target="_blank" href="https://melonport.com/">
          <img src={melonport} />
        </a>
      </Fade>
      <Fade bottom distance="50px" delay={600}>
        <a target="_blank" href="https://github.com/pandonetwork/pando">
          <img src={pando} />
        </a>
      </Fade>
    </Container>
  </ProjectsSection>
);

const ProjectsSection = styled.section`
  height: auto;
  background-color: #019fe3;
  padding: 100px 0 0 0;
  margin-bottom: -3px;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  img {
    max-width: 80%!important;
    ${medium('max-width: 90%!important;')};
  }
`;
export default Projects;
