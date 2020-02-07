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
import LaptopMobile from './court-assets/laptop_mobile.png'
import Tokens from './court-assets/tokens.png'
import Disputes from './court-assets/disputes.png'
import Rewards from './court-assets/rewards.png'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const About = () => (
  <AboutSection>
    <ContentContainer>
      <LaptopImgMobile src={LaptopMobile} />
      <div>
        <h2 className="pink">Judge disputes from anywhere</h2>
        <p>
          The Juror Dashboard is your control room for managing disputes between
          people and organizations from all over the world.
        </p>
        <a className="action-button about-link" href="/court" target="_blank">
          <span>
            <FormattedMessage
              id="court.hero.action"
              defaultMessage="Try the court"
            />
            <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
      <LaptopImg src={Laptop} />
    </ContentContainer>
    <ContentContainer reversed>
      <TokensImg src={Tokens} displayMobile displayDesktop />
      <div>
        <h2 className="pink">How to become a juror</h2>
        <p>
          Anyone will be able to participate as a juror to <br /> help
          adjudicate disputes. To become a juror, you will have to acquire
          Aragon Network Juror (ANJ) tokens, the native token of Aragon Court.
          If you want to be first in line to get ANJ, there will be an initial
          “pre-activation” period to onboard all jurors that want to join Aragon
          Court early.
        </p>
        <a
          className="action-button about-link"
          href="https://anj.aragon.org/"
          target="_blank"
        >
          <span>
            <FormattedMessage id="court.hero.become" defaultMessage="Get ANJ" />
            <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
    </ContentContainer>
    <ContentContainer>
      <DisputesImg src={Disputes} displayMobile />
      <div>
        <h2 className="pink">Manage and make decisions about disputes</h2>
        <p>
          Aragon Court is a dispute resolution protocol formed by jurors to
          handle subjective disputes that cannot be resolved by smart contracts.
        </p>
      </div>
      <DisputesImg src={Disputes} displayDesktop />
    </ContentContainer>
    <ContentContainer reversed>
      <RewardsImg src={Rewards} displayMobile displayDesktop />
      <div>
        <h2 className="pink">Earn Rewards!</h2>
        <p>
          Earn Dispute Fees for successfully adjudicating disputes and monthy
          Subscription Fees for simply being an Active juror, whether you are
          drafted or not. Use the Rewards modules to track your earnings over
          time.
        </p>
      </div>
    </ContentContainer>
  </AboutSection>
)

const AboutSection = styled(Section)`
  height: auto;
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
    overflow-y: hidden;
    ${medium('display: inline;')};
  }
  .about-link {
    width: 100%;
    text-align: left;
  }
`

const ContentContainer = styled.div`
  height: auto;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.reversed ? `row-reverse` : 'row')};
  justify-content: space-between;
  margin-top: 256px;
  margin-bottom: 256px;
  div {
    max-width: ${props => (props.reversed ? '480px' : '345px')};
    height: auto;
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
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
    margin-bottom: 64px;
    div {
      width: 100%;
      max-width: 600px;
    }
  }
`

const LaptopImg = styled.img`
  position: absolute;
  right: -30%;
  top: -35%
  width: 75%;
  height: auto;
  @media screen and (max-width: 1024px) {
    display: ${props => (props.displayMobile ? 'block' : 'none')};
  }
`

const LaptopImgMobile = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 24px 0 24px 0;
  @media screen and (min-width: 1025px) {
    display: none;
  }
`

const TokensImg = styled.img`
  position: absolute;
  left: 0%;
  display: ${props => (props.displayDesktop ? 'block' : 'none')};
  width: 40%;
  height: auto;
  @media screen and (max-width: 1024px) {
    position: relative;
    display: ${props => (props.displayMobile ? 'block' : 'none')};
    width: 60%;
    height: auto;
    margin: 24px 0 24px 0;
  }
`

const DisputesImg = styled.img`
  position: absolute;
  right: 0;
  width: 50%;
  height: auto;
  display: ${props => (props.displayDesktop ? 'block' : 'none')};
  @media screen and (max-width: 1024px) {
    position: relative;
    display: ${props => (props.displayMobile ? 'block' : 'none')};
    width: 110%;
    height: auto;
    margin: 24px 36px 24px 0;
  }
`

const RewardsImg = styled.img`
  position: absolute;
  left: 0;
  width: 35%;
  height: auto;
  display: ${props => (props.displayDesktop ? 'block' : 'none')};
  @media screen and (max-width: 1024px) {
    position: relative;
    display: ${props => (props.displayMobile ? 'block' : 'none')};
    width: 100%;
    height: auto;
    margin: 24px 0 24px 0;
  }
`
export default About
