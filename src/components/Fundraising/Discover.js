import React from 'react';
import styled from 'styled-components';

import image from './assets/discover-icon.svg';
import background from './assets/discover-background.svg';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Discover = () => (
  <Section>
    <Image src={image} />
    <Container>
      <h3>
        Discover fair and sustainable crowdfunding Now available on Aragon
      </h3>
      <a target="_blank" href="https://mainnet.aragon.org">Click here to discover Fundraising</a>
    </Container>
  </Section>
);

const Section = styled.div`
  background: linear-gradient(155.96deg, #ff9372 0.49%, #ffd770 127.39%);
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  min-height: 480px;
  margin: 20px;
  padding: 50px 15px;
  text-align: center;
  ${large('padding: 50px 120px;')};
`;

const Container = styled.div`
  text-align: center;
  margin: auto;
  a {
    font-family: 'FontSemiBold', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 80px;
    text-align: center;
    color: #ffffff;
  }

  h3 {
    font-family: 'FontMedium', sans-serif;
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    letter-spacing: -0.447059px;
    color: #ffffff;
    max-width: 800px;
    margin: auto;
  }
`;
const Image = styled.img`
  max-width: 100%;
  margin-top: 45px;
`;

export default Discover;
