import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
import network1 from './assets/network3.svg';

const Content = () => (
  <StyledSection>
    <Container>
      <img src={network1} />
      <div className="right">
        <h2>Insured agreements</h2>
        <h4>
          You can agree on a minimum and maximum deposit of tokens upon creating
          a new agreement on the Aragon Network. These deposits can be used to 
          penalize bad behavior and reward good behavior.
        </h4>
      </div>
    </Container>
  </StyledSection>
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

export default Content;
