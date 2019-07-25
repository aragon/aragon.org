import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import video from './assets/discover-video.mp4';
import videoMobile from '../Home/home-assets/video-mobile.mp4';
import poster from './assets/poster.jpg';
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
      </BreakPoint>
      <BreakPoint from="medium">
        <VideoDesktop  playsInline autoPlay muted loop poster={poster}>
          <source src={video} type="video/mp4" />
        </VideoDesktop>
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
      </BreakPoint>
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
  ${medium(
    'width: auto; margin-right: 70px;'
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
    min-width: 460px;
    margin-left: -10px;
    margin-right: 30px;
  }
  @media (min-width: 1120px) and (max-width: 1260px) {
    display: block;
    height: 350px;
    min-width: 537px;
    margin-left: -30px;
    margin-right: 50px;
  }
  @media (min-width: 1260px) and (max-width: 1330px) {
    display: block;
    height: 400px !important;
    min-width: 613px;
    margin-left: -50px;
  }
  @media (min-width: 1330px) {
    display: block;
    height: 450px;
    min-width: 690px;
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
  padding-top: 130px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto;
  ${medium('flex-direction: row; margin: auto; justify-content: space-between;')};
  @media (min-width: 690px) and (max-width: 960px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  ${medium('min-width: 453px; max-width: 453px;')};
  text-align: center;
  ${medium('text-align: left;')};
  h2 {
    text-align: center;
    margin: 15px 0;
    margin-top: 50px;
    ${medium('text-align: left; margin-top: 15px;')};
    opacity: 1;

  }
  h4 {
    text-align: center;
    ${medium('text-align: left;')};
    opacity: 0.8;
  }
`;
export default Hero;
