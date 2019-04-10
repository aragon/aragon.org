import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'

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
  background-color: #95BBCE;
  background: linear-gradient(334.64deg, #95BBCE -0.56%, #C5D0E6 46.04%, #E7E4F6 100%);
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
