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
        Decentralized organizations change the way we think about organizations.
        The Aragon Network will change the way you think about jurisdictions and
        governments.
      </h4>
      <Button.Anchor
        className="principal-hero-link"
        mode="strong"
        href="https://github.com/aragon/whitepaper"
        target="_blank">
        Whitepaper
      </Button.Anchor>
    </TextContainer>
  </HeroSection>
);

const HeroSection = styled(Section)`
  background-image: linear-gradient(290deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  height: auto;
  ${medium('height: 550px;')};
  padding-top: 64px;
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
