import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import AlmostFullSection from '../General/AlmostFullSection';
import image from './assets/network4.png';

const About = () => (
  <AlmostFullSection backgroundColor="#639CF5" image={image} imageLeft={true}>
    <AlmostFullSectionBox>
      <h3>The Aragon Network will be governed by the community</h3>
      <p>
        The Aragon Network is not only a digital jurisdiction, but one in which
        you can make your voice heard. The Aragon Network will be governed by
        the community, just like the Aragon project itself.
      </p>
      <a href="https://aragon.org/project/governance">
        Forum
      </a>
    </AlmostFullSectionBox>
  </AlmostFullSection>
);

const AlmostFullSectionBox = styled.div`
  h3 {
    font-family: 'FontRegular', sans-serif;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #ffffff !important;
  }
  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
    opacity: 0.8;
  }
  a {
    font-family: 'FontSemiBold';
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
  }
`;
export default About;
