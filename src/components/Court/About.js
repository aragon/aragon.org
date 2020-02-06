import React from 'react'
import styled from 'styled-components'
import {
  FormattedMessage,
  FormattedHTMLMessage,
  injectIntl,
  intlShape,
} from 'react-intl'
import { Link } from 'react-static'
import Section from '../General/Section'
import Laptop from './court-assets/laptop_court.png'
import Tokens from './court-assets/tokens.png'
import Disputes from './court-assets/disputes.png'
import Rewards from './court-assets/rewards.png'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const About = () => (
  <AboutSection>
    <ContentContainer>
      <div>
        <h2 className="pink">Welcome to the future of jurisdiction</h2>
        <p>
          Aragon Court is a dispute resolution protocol formed by jurors to
          handle subjective disputes that cannot be resolved by smart contracts.
        </p>
      </div>
      <LaptopImg src={Laptop} />
    </ContentContainer>
    <ContentContainer reversed>
      <TokensImg src={Tokens} />
      <div>
        <h2 className="pink">
          How to become
          <br /> a juror
        </h2>
        <p>
          Anyone will be able to participate as a juror to <br /> help
          adjudicate disputes. To become a juror, you will have to acquire
          Aragon Network Juror (ANJ) tokens, the native token of Aragon Court.
          If you want to be first in line to get ANJ, there will be an initial
          “pre-activation” period to onboard all jurors that want to join Aragon
          Court early.
        </p>
      </div>
    </ContentContainer>
    <ContentContainer>
      <div>
        <h2 className="pink">
          Manage and make
          <br />
          decisions about
          <br />
          disputes
        </h2>
        <p>
          Aragon Court is a dispute resolution protocol formed by jurors to
          handle subjective disputes that cannot be resolved by smart contracts.
        </p>
      </div>
      <DisputesImg src={Disputes} />
    </ContentContainer>
    <ContentContainer reversed>
      <RewardsImg src={Rewards} />
      <div>
        <h2 className="pink">Get Rewards!</h2>
        <p>
          Aragon Court is a dispute resolution protocol formed by jurors to
          handle subjective disputes that cannot be resolved by smart contracts.
        </p>
      </div>
    </ContentContainer>
  </AboutSection>
)

const AboutSection = styled(Section)`
  min-height: 100vh;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  .pink {
    color: rgba(1, 191, 227);
    background: linear-gradient(
      to right,
      #ff7c7c 20%,
      #ffc58f 40%,
      #ffc58f 60%,
      #ff7c7c 80%
    );
    font-weight: 300 !important;
    font-family: 'FontMedium';
    width: 100%;
    font-size: 38px;
    line-height: 52px;
    text-align: left !important;
    letter-spacing: -0.447059px;
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 4s linear infinite;
    display: block;
    ${medium('display: inline;')};
  }
`

const ContentContainer = styled.div`
  position: relative;
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.reversed ? `row-reverse` : 'row')};
  justify-content: space-between;
  div {
    max-width: ${props => (props.reversed ? '480px' : '345px')};
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 21px;
      line-height: 35px;
      /* or 167% */

      color: #6d7693;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 1024px) {
    height: 50vh;
  }
`

const LaptopImg = styled.img`
  position: absolute;
  top: 10%;
  right: -25%;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

const TokensImg = styled.img`
  position: absolute;
  left: -15%;
  top: 8%;
  display: block;
  width: 800px;
  height: auto;
  @media screen and (max-width: 1024px) {
    left: -10%;
    top: 12%;
    width: 600px;
    height: auto;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

const DisputesImg = styled.img`
  position: absolute;
  right: 0;
  top: 25%;
  width: 50%;
  height: auto;
  @media screen and (max-width: 1024px) {
    width: 65%;
    height: auto;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

const RewardsImg = styled.img`
  position: absolute;
  left: 0;
  top: 15%;
  width: 50%;
  height: auto;
  @media screen and (max-width: 1024px) {
    top: 25%;
    width: 45%;
    height: auto;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`
export default About
