import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import {Link} from 'react-static';

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
  background-color: white;
  min-height: 650px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-family: 'FontBold';
    font-size: 68px;
    line-height: 1.1;
    margin: 3px 0;
    text-align: center;
    letter-spacing: -1.2px;
    color: #212b36;
  }
  .h1-blue-box {
    display: flex;
    justify-content: center;
  }
  h1.blue {
    color: rgba(1, 191, 227);
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(8deg, rgba(1, 240, 224), rgba(1, 191, 227));
    -webkit-background-clip: text;
  }
  h2 {
    font-family: 'FontRegular';
    font-size: 22px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.33px;
    color: #637381;
    max-width: 663px;
    margin: 35px auto;
  }
`;
export default Hero;
