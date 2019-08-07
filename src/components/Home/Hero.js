import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import {Link} from 'react-static';
import {breakpoint} from '@aragon/ui';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <TextContainer>
      <h1>Organizations of the future</h1>
      <div className="h1-blue-box"><h1 className="blue">run on Aragon</h1></div>
      <h2>
        Aragon lets you freely organize and collaborate without borders or
        intermediaries. Create global, bureaucracy-free organizations,
        companies, or communities.
      </h2>
    </TextContainer>
    <ButtonContainer>
      <a className="principal-button centered" mode="strong" href="./discover">
        Try the product
      </a>
      <a className="secondary-button centered" mode="strong" href="./discover">
        Discover Aragon
      </a>
    </ButtonContainer>
  </HeroSection>
);

const HeroSection = styled(Section)`
  position: relative;
  z-index: 1;
  background: transparent;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 0px;
  .container {
    margin-top: 112px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 10px 0;
`;
const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-family: 'FontBold';
    font-size: 47px;
    ${medium('font-size: 68px;')};
    line-height: 1.09;
    margin: 0;
    text-align: center;
    letter-spacing: -1.2px;
    color: #212b36;
  }
  .h1-blue-box {
    display: flex;
    justify-content: center;
  }
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  h1.blue {
    color: rgba(1, 191, 227);
    background: linear-gradient(to right, #01BFE3 20%, #01F0E0 40%, #01F0E0 60%, #01BFE3 80%);
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 4s linear infinite;

  }
  h2 {
    font-family: 'FontRegular'!important;
    font-size: 22px!important;
    line-height: 35px!important;
    text-align: center!important;
    letter-spacing: 0.33px!important;
    color: #637381!important;
    max-width: 632px!important;
    margin: 20px auto 30px auto!important;
  }
`;
export default Hero;
