import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
import Section from '../General/Section';
import about from './assets/about.svg';
import what from './assets/what.svg';

const medium = css => breakpoint('medium', css);

const About = () => (
  <div>
    <StyledSection>
      <Container>
        <img src={about} />
        <div className="right">
          <h2>
            <FormattedMessage
              id="project.governance.about.module1.title"
              defaultMessage="Aragon is a project run by its community."
            />
          </h2>
          <h4>
            <FormattedMessage
              id="project.governance.about.module1.content"
              defaultMessage="Aragon is governed by Aragon Network Token (ANT) holders. You can participate in governance by voting with ANT."
            />
          </h4>
          <a
            target="_blank"
            href="https://wiki.aragon.org/documentation/aragon_network_token/">
            <span>
              <FormattedMessage
                id="project.governance.about.module1.action"
                defaultMessage="About ANT"
              />{' '}
              <img src={require(`../General/assets/arrow.svg`)} />
            </span>
          </a>
        </div>
      </Container>
    </StyledSection>
    <StyledSection>
      <Container>
        <BreakPoint to="medium">
          <img src={what} />
        </BreakPoint>
        <div className="left">
          <h2>
            <FormattedMessage
              id="project.governance.about.module2.title"
              defaultMessage="What is an AGP?"
            />
          </h2>
          <h4>
            <FormattedMessage
              id="project.governance.about.module2.content"
              defaultMessage="AGP stands for Aragon Governance Proposal, a document that proposes a change to the governance of the Aragon project. Community members create and review proposals following AGP-1: The Aragon Governance Proposal Process."
            />
          </h4>
          <a
            target="_blank"
            href="https://github.com/aragon/AGPs/blob/master/AGPs/AGP-1.md">
            <span>
              <FormattedMessage
                id="project.governance.about.module2.action"
                defaultMessage="Read AGP-1"
              />{' '}
              <img src={require(`../General/assets/arrow.svg`)} />
            </span>
          </a>
        </div>
        <BreakPoint from="medium">
          <img src={what} />
        </BreakPoint>
      </Container>
    </StyledSection>
  </div>
);

const StyledSection = styled(Section)`
  border-bottom: 2px solid #f9fafc;
`;

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
    padding-top: 40px;
    ${medium('padding-top: 0;')};
  }
  div.right {
    ${medium('padding-left: 50px;')};
  }
  div.left {
    ${medium('padding-right: 50px;')};
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
    color: #4a80e4;
  }
`;

export default About;
