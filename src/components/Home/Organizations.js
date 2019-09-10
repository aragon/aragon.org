import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import aragonImage from './home-assets/monitor.png';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const Organizations = () => (
  <Organization>
    <Box>
      <Container>
        <h3>Organizations you can understand</h3>
        <p>
          Whether you want to run a company, a community or a co-op, Aragon is
          easy to use. No need to go through lengthy stack of papers.
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
  padding: 120px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 60%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${medium('text-align: left; margin: inherit;')};
  p {
    font-size: 21px;
    line-height: 35px;
    text-align: left;
    letter-spacing: 0.24px;
    color: #6d7693;
    max-width: 298px;
    margin: 20px 0;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: left;
    letter-spacing: -0.447059px;
    margin: 50px 0 5px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
    max-width: 333px;
  }
`;
const Image = styled.img`
  max-width: calc(100% + 413px);
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
`

export default Organizations;
