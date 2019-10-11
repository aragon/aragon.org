import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import image from './assets/community.svg';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const SustainCommunity = ({}) => (
  <StyledSection>
    <Box className="box">
      <Container className="divided-section-container">
        <h3>
          Sustain <br />
          <span className="orange">your community</span>
        </h3>
        <p>
          Fundraising is ideal for community oriented projects with long-term
          objectives that require ongoing funding and fair community governance.
        </p>
      </Container>
      <ImageContainer className="image-left">
        <Image className="divided-section-image" src={image} />
      </ImageContainer>
    </Box>
  </StyledSection>
);

const StyledSection = styled(Section)`
  background-color: white;
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  flex-direction: column;
  ${medium('flex-direction: row; padding: 120px;')}
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${medium('flex-direction: row;')}
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${medium(
    'text-align: left; margin: inherit; width: 60%; align-items: flex-start;'
  )}
  p {
    font-size: 21px;
    line-height: 35px;
    text-align: center;
    ${medium('text-align: left;')}
    letter-spacing: 0.24px;
    color: #6d7693;
    max-width: 298px;
    margin: 20px 0;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    ${medium('text-align: left;')}
    letter-spacing: -0.447059px;
    margin: 50px 0 5px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
    max-width: 333px;
    display: block;
  }
  .orange {
    display: block;
    background: -webkit-linear-gradient(
      156.5deg,
      #ff9372 -36.73%,
      #ffb471 33.53%,
      #ffd770 106.77%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 30px 0;
  ${medium('max-width: calc(100% + 413px); margin: auto; height: auto;')};
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
`;

export default SustainCommunity;
