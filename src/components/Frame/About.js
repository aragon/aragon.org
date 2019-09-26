import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import video from './assets/agent-video.mp4';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const About = () => (
  <Organization>
    <Box>
      <Container>
        <h3>
          Frame, <br />
          <span className="blue">a desktop-native Ethereum provider</span>
        </h3>
        <p>
          Use a hardware wallet or hot wallet with Frame. Supports native
          Agent integration, so your Aragon organization can easily interact
          with any Ethereum app.
        </p>
        <a className="action-button" href="https://help.aragon.org/article/37-agent" target="_blank">
          <span>
            Learn more <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>

      </Container>
      <VideoContainer>
        <Video playsInline autoPlay muted loop src={video} />
      </VideoContainer>
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
  ${medium('padding: 30px 120px 100px 120px;')}
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
    background: -webkit-linear-gradient(69deg, #6590FF, #5D21D4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
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
    max-width: 346px;
  }
`;
const Video = styled.video`
  max-width: 100%;
  margin-top: 30px;
  border-radius: 12px;
  ${medium('max-width: 66%; margin-top: 0;')}
`;

const VideoContainer = styled.div`
  width: 100%;
  text-align: right;
  margin: auto;
`;

export default About;
