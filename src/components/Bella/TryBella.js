import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import image from './assets/hello.svg'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)


const Video = () => (
  <VideoeSection>
    <Box>
      <Container>
      <BreakPoint to="medium"><img src={image} /></BreakPoint>
      <h2>Try Aragon 0.7 <br/>Bella now</h2>
      <h4>Aragon empowers you to freely organize and collaborate. Create global, bureaucracy-free organizations, companies, and communities.</h4>
      <Button.Anchor className="hero-link" mode="strong" href="https://mainnet.aragon.org/">Try Bella now</Button.Anchor>
      </Container>
      <BreakPoint from="medium"><img src={image} /></BreakPoint>
    </Box>
  </VideoeSection>
);

const VideoeSection = styled(Section)`
  background-color: #95BBCE;
  background: linear-gradient(334.64deg, #95BBCE -0.56%, #C5D0E6 46.04%, #E7E4F6 100%);
  background-size: cover;
  min-height: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  img {
    padding-top: 10px;
    max-width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  ${medium('text-align: left; margin: inherit; padding-right: 30px;')};
  h2 {
    text-align: center;
    ${medium('text-align: left;')};
    line-height: 1.2;
  }
  h4 {
    text-align: center;
    ${medium('text-align: left;')};
  }
`;
const Image = styled.img`
  max-width: 100%
`;

export default Video
