import React from 'react';
import styled from 'styled-components';
import transparency from './assets/transparency.svg';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Transparency = () => (
  <TransparencySection>
    <ImageContainer>
      <Fade bottom distance="50px">
        <img src={transparency} />
      </Fade>
    </ImageContainer>
    <TextBox>
      <Fade bottom distance="50px">
        <div className="content">
          <h3>Transparency</h3>
          <h2>Actions are public and transparent by default</h2>
        </div>
      </Fade>
    </TextBox>
  </TransparencySection>
);

const ImageContainer = styled.div`
  background: #f0c46f;
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  ${medium('height: 720px;')};
`;

const TransparencySection = styled.section`
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
    border-bottom: solid 4px #f0c46f;
  }
  h2 {
    font-family: 'FontLight';
    font-weight: 100;
    font-size: 38px;
    ${medium('font-size: 48px;')};
    line-height: 1.54;
    color: #030304;
    max-width: 422px;
  }
`;

export default Transparency;
