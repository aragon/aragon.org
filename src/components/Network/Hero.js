import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
import {breakpoint} from '@aragon/ui';
import Section from '../General/Section';
import background from './assets/network-cover.svg';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <HeroMask>
      <TextContainer>
        <h2>Aragon Network</h2>
        <h4>Welcome to the world’s first digital jurisdiction</h4>
        <div className="hero-button-container centered">
          <a
            className="principal-button"
            href="https://github.com/aragon/whitepaper"
            target="_blank">
            Whitepaper
          </a>
        </div>
      </TextContainer>
    </HeroMask>
  </HeroSection>
);

const HeroSection = styled.div`
  background: linear-gradient(270deg, #32fff5, #01bfe3);
  background-size: 400% 400%;
  -webkit-animation: HeroAnimation 7s ease infinite;
  -moz-animation: HeroAnimation 7s ease infinite;
  animation: HeroAnimation 7s ease infinite;
  height: 550px;
  padding-top: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroMask = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${medium('height: 550px;')};
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 663px;
  margin: auto;
  text-align: center;
  h2 {
    margin-top: 20px;
  }
  h4 {
    color: #ffffff;
  }
`;
export default Hero;
