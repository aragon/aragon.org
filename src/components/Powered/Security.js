import React from 'react';
import styled from 'styled-components';
import security from './assets/security.svg';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Security = () => (
  <SecuritySection>
    <ImageContainer>
      <Fade bottom distance="50px">
        <img src={security} />
      </Fade>
    </ImageContainer>
    <TextBox>
      <Fade bottom distance="50px">
        <div className="content">
          <h3>Security</h3>
          <h2>
            aragonOS secures more than <b>$1m</b>
          </h2>
          <p>
            The smart contracts have been audited by the Whitehat group,
            ConsenSys Diligence, and Authio
          </p>
        </div>
      </Fade>
    </TextBox>
  </SecuritySection>
);

const ImageContainer = styled.div`
  background: #70d5be;
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  ${medium('height: 720px;')};
`;

const SecuritySection = styled.section`
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
    ${medium('padding: 30px 70px;')};
  }
  h3 {
    color: black;
    font-family: 'FontBold';
    font-size: 28px;
    line-height: 55px;
    border-bottom: solid 4px #75c2ad;
  }
  h2 {
    font-family: 'FontLight';
    font-weight: 100;
    font-size: 38px;
    ${medium('font-size: 48px;')};
    line-height: 1.54;
    color: #030304;
    max-width: 422px;
    b {
      font-family: 'FontSemiBold';
    }
  }
  p {
    font-family: 'FontLight';
    font-weight: 100;
    font-size: 22px;
    ${medium('font-size: 32px;')};
    line-height: 1.5;
    color: #030304;
    max-width: 499px;
  }
`;
export default Security;
