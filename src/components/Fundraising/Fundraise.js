import React from 'react';
import Section from '../General/Section';
import SmallCard from '../General/SmallCard';
import styled from 'styled-components';
import {Link} from 'react-static';
import image from './assets/fundraise-graph.svg';
import imageMobile from './assets/fundraise-graph-mobile.svg';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const Fundraise = () => (
  <FundraiseSection>
    <Container>
      <div>
        <h3>Fundraise <span className="orange">on your terms</span></h3>
        <p>
          Fundraising’s customizable framework makes setting investment and fundraising terms a dream
        </p>
        <BreakPoint to="medium"><img src={imageMobile} /></BreakPoint>
        <BreakPoint from="medium"><img src={image} /></BreakPoint>
      </div>
    </Container>
  </FundraiseSection>
);

const FundraiseSection = styled(Section)`
  padding: 114px 15px;
  z-index: 3;
  background: #F6F9FC;
`;
const Container = styled.div`
  text-align: center;
  p {
    font-weight: normal;
    font-size: 21px;
    line-height: 35px;
    text-align: center;
    color: #6D7693;
    margin: 0 auto 50px;
    max-width: 552px;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    letter-spacing: -0.447059px;
    margin: 50px auto 15px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
  }
  .orange {
    background: -webkit-linear-gradient(156.5deg, #FF9372 -36.73%, #FFB471 33.53%, #FFD770 106.77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    margin-bottom: 33px;
    max-width: 95%;
  }
`;

export default Fundraise;
