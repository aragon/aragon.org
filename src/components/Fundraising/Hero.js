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
      <h2>Fair and sustainable fundraising for all</h2>
      <h4>
        Fundraising empowers individuals and organizations to raise funds
        sustainably by maintaining accountability between projects and patrons.
      </h4>
      <div className="hero-button-container centered">
        <a
          className="principal-button"
          href="https://mainnet.aragon.org"
          target="_blank">
          Try Fundraising now
        </a>
      </div>
    </TextContainer>
  </HeroSection>
);

const HeroSection = styled(Section)`
  background: linear-gradient(
    156.5deg,
    #ff9372 -36.73%,
    #ffb471 33.53%,
    #ffd770 106.77%
  );
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
`;
export default Hero;
