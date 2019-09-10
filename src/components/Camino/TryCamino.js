import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import video from '../Bella/assets/promo-video.mp4';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const TryCamino = () => (
  <VideoeSection>
    <h3>Organizations, re-imagined</h3>
    <p>A glimpse into the future of organizations that you can use today</p>
    <video playsInline autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  </VideoeSection>
);

const VideoeSection = styled(Section)`
  background-color: #062132;
  min-height: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  video {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
    max-width: 100%;
    border-radius: 8px;
    margin: auto;
  }
  h3 {
    font-size: 46px;
    line-height: 59px;
    text-align: center;
    letter-spacing: -0.564706px;
    color: #FFFFFF;
  }
  p {
    font-size: 21px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 50px;
    color: #7F89A7;
  }
`;

export default TryCamino;
