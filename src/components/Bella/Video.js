import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import backgroundImage from './assets/video-background.png'

import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)


const Video = () => (
  <VideoeSection>
    <Box>
      <Container>
      </Container>
    </Box>
  </VideoeSection>
);

const VideoeSection = styled(Section)`
  background-color: #1c1d23;
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  ${medium('text-align: left; margin: inherit;')};
  h2 {
    text-align: center;
    ${medium('text-align: left;')};
    color: white;
    line-height: 1.2;
  }
  h4 {
    text-align: center;
    ${medium('text-align: left;')};
    color: #b4b5cc;
  }
`;
const Image = styled.img`
  max-width: 100%
`;

export default Video
