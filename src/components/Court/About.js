import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
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
      <LaptopImgMobile src={LaptopMobile} alt="Laptop with jurors dashboard" />
      <div>
        <h2 className="pink">
          <FormattedMessage
            id="court.about.title1"
            defaultMessage="Solve real problems for real people"
          />
        </h2>
        <p>
          <FormattedMessage
            id="court.about.description1"
            defaultMessage="The Juror Dashboard is your control room for managing disputes between people and organizations from all over the world."
          />
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
      <LaptopImg
        src={Laptop}
        alt="Laptop with jurors dashboard, desktop view"
      />
    </ContentContainer>
    <ContentContainer reversed>
      <TokensImg
        src={Tokens}
        displayMobile
        displayDesktop
        alt="ANT and ANJ logo"
      />
      <div>
        <h2 className="pink">
          <FormattedMessage
            id="court.about.title2"
            defaultMessage="Becoming a juror for Aragon Court"
          />
        </h2>
        <p>
          <FormattedMessage
            id="court.about.description2"
            defaultMessage="Anyone can participate as a juror to help adjudicate disputes. To become a juror, you will have to acquire Aragon Network Juror (ANJ) tokens, the native token of Aragon Court. This token will ensure you and the other jurors are properly aligned and maintain a well functioning Court."
          />
        </p>
        <a
          className="action-button about-link"
          href="https://anj.aragon.org/"
          target="_blank"
        >
          <span>
            <FormattedMessage id="court.about.anj" defaultMessage="Get ANJ" />
            <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
    </ContentContainer>
    <ContentContainer>
      <DisputesImg
        src={Disputes}
        displayMobile
        alt="Example dispute notifications"
      />
      <div>
        <h2 className="pink">
          <FormattedMessage
            id="court.about.title3"
            defaultMessage="Track disputes & inspect evidence"
          />
        </h2>
        <p>
          <FormattedMessage
            id="court.about.description3"
            defaultMessage="Explore disputes and manage them. You will always know what you need to do and when you need to do it."
          />
        </p>
      </div>
      <DisputesImg
        src={Disputes}
        displayDesktop
        alt="Example dispute notifications, desktop"
      />
    </ContentContainer>
    <ContentContainer reversed>
      <RewardsImg
        src={Rewards}
        displayMobile
        displayDesktop
        alt="Example rewards notification"
      />
      <div>
        <h2 className="pink">
          <FormattedMessage
            id="court.about.title4"
            defaultMessage="Earn Rewards"
          />
        </h2>
        <p>
          <FormattedMessage
            id="court.about.description4"
            defaultMessage="Earn Dispute Fees for successfully adjudicating disputes and monthy Subscription Fees for simply being an Active juror, whether you are drafted or not."
          />
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
    max-width: ${props => (props.reversed ? '480px' : '370px')};
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
