import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import background from './assets/hero.png';
import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <Container>
      <h2>Governance</h2>
      <h4>
        Aragon exists to empower people, starting with our own community.
        <br/>The project is community-governed, and we are committed to decentralizing control.
      </h4>
      <Button.Anchor
        className="hero-link"
        mode="strong"
        href="https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/"
        target="_blank">
        Manifesto
      </Button.Anchor>
    </Container>
  </HeroSection>
);

const HeroSection = styled(Section)`
  height: 550px;
  background: #F9EDDF;
  background-image: url(${background});
  background-size: cover;
  background-position: center
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Hero;
