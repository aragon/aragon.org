import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
import about from './assets/about.svg';
import what from './assets/what.svg';

const About = () => (
  <div>
  <StyledSection>
    <Container>
      <img src={about} />
      <div>
        <h2>Aragon is a project run by its community.</h2>
        <h4>
          Aragon is governed by Aragon Network Token (ANT) holders. You can
          participate in governance by voting with ANT.
        </h4>
        <a target="_blank" href="https://wiki.aragon.org/documentation/aragon_network_token/">
          <span>
            About ANT <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
    </Container>
  </StyledSection>
  <StyledSection>
    <Container>
      <BreakPoint to="medium"><img src={what} /></BreakPoint>
      <div>
        <h2>What is an AGP?</h2>
        <h4>
          AGP stands for Aragon Governance Proposal, a document that proposes a
          change to the governance of the Aragon project. The process for
          creating a proposal and participating in Aragon governance is defined
          in AGP-1: The Aragon Governance Proposal Process.
        </h4>
        <a target="_blank" href="https://github.com/aragon/AGPs/blob/master/AGPs/AGP-1.md">
          <span>
            Read AGP-1 <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
      <BreakPoint from="medium"><img src={what} /></BreakPoint>
    </Container>
  </StyledSection>
  </div>
);

const StyledSection = styled(Section)`
  border-bottom: 2px solid #f9fafc;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  padding: 50px 0;
  img {
    max-width: 90%;
  }
  div {
    max-width: 480px;
  }
  h2 {
    font-family: 'FontLight';
    font-size: 46px;
    line-height: 62px;
    color: #2d4051;
    text-align: left;
  }
  h4 {
    font-family: 'FontRegular';
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.24px;
    color: #7f8198;
    text-align: left;
  }
  a {
    font-size: 16px;
    line-height: 4;
    text-align: center;
    color: #22E0FF;
  }
`;

export default About;
