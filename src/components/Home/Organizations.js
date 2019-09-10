import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import aragonImage from './home-assets/monitor.svg';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const Organizations = () => (
  <Organization>
    <Box>
      <Container>
        <h3>
          Transparent <br />
          <span className="blue">governance</span>
        </h3>
        <p>
          View and participate in important decisions. Track the movement of
          funds with full accountability. Understand at a glance who has the
          power in your organization.
        </p>
        <a className="secondary-button" href="./discover">
          Learn more
        </a>
      </Container>
      <ImageContainer>
        <Image src={aragonImage} />
      </ImageContainer>
    </Box>
  </Organization>
);

const Organization = styled(Section)`
  background-color: white;
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${medium('padding: 120px;')}
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  ${medium('flex-direction: row;')}
`;
const Container = styled.div`
  width: 100%;
  ${medium('width: 60%;')}
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${medium('text-align: left; margin: inherit; align-items: flex-start;')};
  .blue {
    background: -webkit-linear-gradient(69deg, #65aaff, #5d21d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
  }
`;
const Image = styled.img`
  max-width: 100%;
  margin-top: 30px;
  ${medium('max-width: calc(100% + 413px); margin-top: 0;')}
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
`;

export default Organizations;
