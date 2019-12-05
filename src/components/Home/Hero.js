import React from 'react'
import styled from 'styled-components'
import Section from '../General/Section'
import { Link } from 'react-static'
import { breakpoint } from '@aragon/ui'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Hero = ({ ...props }) => (
  <HeroSection>
    <TextContainer>
      <h1>
        <FormattedMessage
          id="home.hero.title1"
          defaultMessage="Organizations of the future"
        />
      </h1>
      <div className="h1-blue-box">
        <h1 className="blue">
          <FormattedMessage
            id="home.hero.title2"
            defaultMessage="run on Aragon"
          />
        </h1>
      </div>
      <h2>
        <FormattedMessage
          id="home.hero.description"
          defaultMessage="Aragon empowers you to freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, and communities."
        />
      </h2>
    </TextContainer>
    <ButtonContainer>
      <a
        className="principal-button centered"
        mode="strong"
        href="https://app.aragon.org"
      >
        <FormattedMessage
          id="home.hero.action1"
          defaultMessage="Try the product"
        />
      </a>
      <Link
        className="secondary-button centered"
        to={
          props.intl.locale
            ? '/' + props.intl.locale + '/discover'
            : '/discover'
        }
      >
        <FormattedMessage
          id="home.hero.action2"
          defaultMessage="Discover Aragon"
        />
      </Link>
    </ButtonContainer>
  </HeroSection>
)

const HeroSection = styled(Section)`
  position: relative;
  z-index: 1;
  background: transparent;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 0px;
  .container {
    margin-top: 50px;
    ${medium('margin-top: 112px;')}
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 10px 0;
  flex-direction: column;
  ${medium('flex-direction: row;')}
  a {
    margin: 10px !important;
    min-width: 186px;
    ${medium('min-width: auto; margin: 0 10px;')};
  }
`
const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-family: 'FontBold';
    font-size: 47px;
    ${medium('font-size: 68px;')};
    line-height: 1.09;
    margin: 0;
    text-align: center;
    letter-spacing: -1.2px;
    color: #212b36;
  }
  .h1-blue-box {
    display: flex;
    justify-content: center;
  }
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  h1.blue {
    color: rgba(1, 191, 227);
    background: linear-gradient(
      to right,
      #01bfe3 20%,
      #01f0e0 40%,
      #01f0e0 60%,
      #01bfe3 80%
    );
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 4s linear infinite;
  }
  h2 {
    font-family: 'FontRegular' !important;
    font-size: 22px !important;
    line-height: 35px !important;
    text-align: center !important;
    letter-spacing: 0.33px !important;
    color: #637381 !important;
    max-width: 632px !important;
    margin: 20px auto 30px auto !important;
  }
`
const propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Hero)
