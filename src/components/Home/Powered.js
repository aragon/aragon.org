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
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Powered = props => (
  <PoweredSection>
    <h3 className="powered-title">
      <FormattedHTMLMessage
        id="home.powered.title"
        defaultMessage={`
      Aragon is powered by users,
      <br />`}
      />
      <span className="blue">
        <FormattedHTMLMessage
          id="home.powered.title2"
          defaultMessage={` and users love Aragon`}
        />
      </span>
    </h3>
    <CardsContainer>
      <Card imageUrl={require('./home-assets/blondeman.png')}>
        <a className="discover" href="#">
          Discover first-hand some incredible things that today are Powered by
          Aragon
        </a>
        <h5>Thomas Clark - Coinbase</h5>
      </Card>
      <Card imageUrl={require('./home-assets/woman.png')}>
        <a className="discover" href="#">
          Discover first-hand some incredible things that today are Powered by
          Aragon
        </a>
        <h5>Thomas Clark - Coinbase</h5>
      </Card>
      <Card imageUrl={require('./home-assets/man.png')}>
        <a className="discover" href="#">
          Discover first-hand some incredible things that today are Powered by
          Aragon
        </a>
        <h5>Thomas Clark - Coinbase</h5>
      </Card>
    </CardsContainer>
    <div className="centered">
      <a className="action-button" href="./discover" target="_blank">
        <span>
          <FormattedMessage
            id="home.powered.action"
            defaultMessage="Check all the cases"
          />
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </div>
  </PoweredSection>
)

const PoweredSection = styled(Section)`
  position: relative;
  z-index: 1;
  .blue {
    color: #639cf5;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    ${medium('text-align: left;')}
    letter-spacing: -0.447059px;
    margin: 50px 0 5px;
    color: #212b36;
  }

  .powered-title {
    text-align: center;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Card = styled.div`
  position: relative;
  z-index: 1;
  width: 362px;
  height: 479px;
  background-image: url(${props => props.imageUrl});
  // background: black;
  margin: 32px 16px;
  border-radius: 8px;
  text-align: left;
  .discover {
    position: absolute;
    bottom: 15%;
    left: 8%;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 154.7%;
    max-width: 298px;
    text-align: left;
    letter-spacing: -0.01em;
    color: white !important;
  }

  h5 {
    position: absolute;
    bottom: 8%;
    left: 8%;
    font-weight: 600;
    font-size: 16px;
    line-height: 154.7%;
    letter-spacing: -0.01em;
    color: rgba(255, 255, 255, 0.57);
  }
`
export default Powered
