import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import {Link} from 'react-static';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <TextContainer>
      <h2>
        <span className="black">The world’s first</span>
        <br /> digital jurisdiction
      </h2>
      <h4>
        Smart contracts change the way we think about organizations.
        The Aragon Network will change the way we think about jurisdictions and
        governments.
      </h4>
      <div className="hero-button-container centered">
        <a className="principal-button" href="https://github.com/aragon/whitepaper"
          target="_blank">
          Whitepaper
        </a>
      </div>
    </TextContainer>
  </HeroSection>
);

const HeroSection = styled(Section)`
  background: linear-gradient(270deg, #83CCBE, #E8F6E4);
  background-size: 400% 400%;
  -webkit-animation: HeroAnimation 7s ease infinite;
  -moz-animation: HeroAnimation 7s ease infinite;
  animation: HeroAnimation 7s ease infinite;
  height: auto;
  ${medium('height: 550px;')};
  padding-top: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 663px;
  margin: auto;
  text-align: center;
  h2 .black {
    color: #212b36;
  }
  h4 {
    color: #6d7693;
  }
`;
export default Hero;
