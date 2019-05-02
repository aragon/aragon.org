import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
import about from './assets/about.svg';
import what from './assets/what.svg';

const About = () => (
  <Section>
    <Container>
      <img src={about} />
      <div>
        <h2>Aragon is a project run by its community.</h2>
        <h4>
          Aragon responds to Aragon Network Token holders. You can also
          participate in the project's governance by buying ANT.
        </h4>
      </div>
    </Container>
    <Container>
      <div>
        <h2>What is AGP?</h2>
        <h4>
          AGP stands for Aragon Governance Proposal. An AGP is a document that
          details a change to the management, allocation, or use of shared
          resources owned or directly influenced by the Aragon Network. All AGPs
          must be consistent with the goals and values put forth in AGP-0 (the
          Aragon Manifesto) and compliant with the requirements outlined in this
          document, AGP-1.
        </h4>
      </div>
      <img src={what} />
    </Container>
  </Section>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
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
`;

export default About;
