import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import backgroundImage from './assets/unstoppable-org-background.png'
import aragonImage from './assets/unstoppable-org.svg'

import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const UnstoppableOrganizations = () => (
  <UnstoppableSection>
    <Box>
      <Container>
        <img src={aragonImage}/>
      </Container>
      <Container>
        <h2>Unstoppable <br/>organizations</h2>
        <h4>Aragon provides all the necessary tools for human collaboration. Aragon organizations are impossible to censor or shut down, escaping the boundaries of opression and censorship.</h4>
        <a className="hero-link">About the project ></a>
      </Container>
    </Box>
  </UnstoppableSection>
);

const UnstoppableSection = styled(Section)`
  background-color: #1c1d23;
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  h2 {
    text-align: left;
    color: white;
    line-height: 1.2;
  }
  h4 {
    text-align: left;
    color: #b4b5cc;
  }
`;

export default UnstoppableOrganizations
