import React from 'react';
import styled from 'styled-components';
import governance from './assets/governance.svg';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Governance = () => (
  <GovernanceSection>
    <BreakPoint to="medium">
      <ImageContainer>
        <Fade bottom distance="50px">
          <img src={governance} />
        </Fade>
      </ImageContainer>
    </BreakPoint>
    <TextBox>
      <Fade bottom distance="50px">
        <div className="content">
          <h3>Governance</h3>
          <h2>
            Stakeholders can help decide the future of the organization
          </h2>
        </div>
      </Fade>
    </TextBox>
    <BreakPoint from="medium">
      <ImageContainer>
        <Fade bottom distance="50px">
          {' '}
          <img src={governance} />
        </Fade>
      </ImageContainer>
    </BreakPoint>
  </GovernanceSection>
);

const ImageContainer = styled.div`
  background: #019fe3;
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  ${medium('height: 720px;')};
`;

const GovernanceSection = styled.section`
  background-color: white;
  min-height: 720px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;

const TextBox = styled.div`
  width: 100%;
  div.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 70px 30px;
    ${medium('padding: 30px 70px; align-items: flex-end;')};
  }
  h3 {
    color: black;
    font-family: 'FontBold';
    font-size: 28px;
    line-height: 55px;
    border-bottom: solid 4px #019fe3;
    text-align: left;
    ${medium('text-align: right;')};
  }
  h2 {
    font-family: 'FontLight';
    font-size: 38px;
    font-weight: 100;
    ${medium('font-size: 48px;')};
    line-height: 1.54;
    color: #030304;
    max-width: 554px;
    text-align: left;
    ${medium('text-align: right;')};
  }
`;

export default Governance;
