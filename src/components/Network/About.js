import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
import network1 from './assets/network1.svg';
import network2 from './assets/network2.svg';

const About = () => (
  <div>
    <StyledSection className="top">
      <Container>
        <img src={network1} />
        <div className="right">
          <h2>Effective dispute resolution</h2>
          <h4>
            The Aragon Network encompasses a set of courts, which can be used to
            settle disputes. By using smart contracts, cases can be closed way
            faster than in traditional courts. Fairness for everyone.
          </h4>
        </div>
      </Container>
    </StyledSection>
    <StyledSection className="bottom">
      <Container>
        <BreakPoint to="medium">
          <img src={network2} />
        </BreakPoint>
        <div className="left">
          <h2>Anonymity and trust, together</h2>
          <h4>
            Mom probably advised you not to interact with strangers. But thanks
            to the Aragon Network, you can transact with people who are using
            aliases, or stay anonymous yourself. You can open disputes if
            someone misbehaves.
          </h4>
        </div>
        <BreakPoint from="medium">
          <img src={network2} />
        </BreakPoint>
      </Container>
    </StyledSection>
  </div>
);

const StyledSection = styled(Section)`
  border-bottom: 2px solid #f9fafc;
  &.top {
    padding: 90px 15px 45px 15px;
  }
  &.bottom  {
    padding: 45px 15px 90px 15px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  padding: 50px 0;
  img {
    max-width: 70%;
    margin-bottom: 30px;
    ${medium('max-width: 90%; margin-bottom: 0;')};

  }
  div {
    max-width: 480px;
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
    text-align: center;
    ${medium('text-align: left;')};
  }
  h4 {
    font-family: 'FontRegular';
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.24px;
    color: #7f8198;
    text-align: center;
    ${medium('text-align: left;')};
  }
`;

export default About;
