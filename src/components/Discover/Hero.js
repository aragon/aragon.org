import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import video from './assets/discover-video.mp4';
import videoMobile from '../Home/home-assets/video-mobile.mp4';
import {Link} from 'react-static';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <Box>
      <BreakPoint to="medium">
        <div className="mobile-container">
          <VideoMobile playsInline autoPlay muted loop>
            <source src={videoMobile} type="video/mp4" />
          </VideoMobile>
        </div>
      </BreakPoint>
      <BreakPoint from="medium">
        <VideoContainer>
          <VideoDesktop  playsInline autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </VideoDesktop>
        </VideoContainer>
      </BreakPoint>
      <TextContainer>
        <h2>Take back your freedom to organize</h2>
        <h4>
          Discover the unparalleled power to organize. Whether you want to
          collaborate with your co-founder, open a non-profit, or just organize
          an online community, Aragon is there for you.
        </h4>
        <Button.Anchor
          className="principal-hero-link"
          mode="strong"
          href="https://mainnet.aragon.org "
          target="_blank">
          Try it out
        </Button.Anchor>
      </TextContainer>

    </Box>
  </HeroSection>
);

const VideoContainer = styled.div`
  width: 100%;
`;

const VideoMobile = styled.video`
  width: 90%;
  max-width: 312px;
  margin-top: 30px;
  z-index: 3;
  position: relative;
  border-radius: 8px;
`;

const VideoDesktop = styled.video`
  height: 450px;
  max-width: 312px;
  margin-top: 30px;
  ${medium(
    'width: auto; margin-right: 70px; max-width: inherit; margin-top: 0;'
  )};
  z-index: 2;
  position: relative;
  border-radius: 8px;

  @media (min-width: 10px) and (max-width: 960px) {
    display: none;
  }
  @media (min-width: 960px) and (max-width: 1120px) {
    display: block;
    height: 300px;
    margin-left: -10px;
    margin-right: 30px;
  }
  @media (min-width: 1120px) and (max-width: 1260px) {
    display: block;
    height: 350px;
    margin-left: -30px;
    margin-right: 50px;
  }
  @media (min-width: 1260px) and (max-width: 1330px) {
    display: block;
    height: 400px !important;
    margin-left: -50px;
  }
  @media (min-width: 1330px) {
    display: block;
    height: 450px;
    margin-left: -70px;
  }
`

const HeroSection = styled(Section)`
  background-image: linear-gradient(290deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  min-height: 650px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .mobile-container {
    width: 100%;
    text-align: center;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  @media (min-width: 690px) and (max-width: 960px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  ${medium('min-width: 453px;')};
  h2 {
    text-align: left;
    opacity: 1;
    margin: 15px 0;
  }
  h4 {
    text-align: left;
    opacity: 0.8;
  }
`;
export default Hero;
