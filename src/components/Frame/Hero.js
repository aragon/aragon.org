import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import background from './assets/background-hero.png';

const Hero = () => (
  <HeroSection>
    <Container>
      <h2>Aragon Agent</h2>
      <div className="h4-blue-box">
        <h4 className="blue">Hold assets and perfom actions from Aragon organizations</h4>
      </div>
    </Container>
  </HeroSection>
);

const HeroSection = styled(Section)`
  height: 550px;
  background: #F9EDDF;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top:64px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h4 {
    font-size: 22px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.33px;
  }
  .h4-blue-box {
    display: flex;
    justify-content: center;
  }
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  h4.blue {
    color: rgba(1, 191, 227);
    background: linear-gradient(
      to right,
      #01bfe3 20%,
      #01f0e0 40%,
      #01f0e0 60%,
      #01bfe3 80%
    );
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 4s linear infinite;
  }
`;

export default Hero;
