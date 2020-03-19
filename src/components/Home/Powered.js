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
        Everyone’s organization is different,
      <br />`}
      />
      <span className="blue">
        <FormattedHTMLMessage
          id="home.powered.title2"
          defaultMessage={`build yours with Aragon`}
        />
      </span>
    </h3>
    <CardsContainer>
      <Card imageUrl={require('./home-assets/blondeman.png')}>
        <div>
          <h3 className="discover" href="#">
            <FormattedMessage
              id="home.powered.description1"
              defaultMessage={`"I created a new organization with governance, ability to hold money, and I put it on mainnet in 30 minutes"`}
            />
          </h3>
          <h5>Jesse Pollak - Coinbase</h5>
        </div>
      </Card>
      <Card imageUrl={require('./home-assets/woman.png')}>
        <div>
          <h3 className="discover" href="#">
            <FormattedMessage
              id="home.powered.description2"
              defaultMessage={`"The first time we used the Agent app to upgrade our protocol's parameters it felt like magic"`}
            />
          </h3>
          <h5>Jenna Zenk - Avantgarde Finance</h5>
        </div>
      </Card>
      <Card imageUrl={require('./home-assets/man.png')}>
        <div>
          <h3 className="discover" href="#">
            <FormattedMessage
              id="home.powered.description3"
              defaultMessage={`"The first Aragon DAO we're launching is going to govern the $LAND smart contract"`}
            />
          </h3>
          <h5>Esteban Ordano - Decentraland</h5>
        </div>
      </Card>
    </CardsContainer>
    <div>
      <a className="action-button centered" href="https://poweredbyaragon.com">
        <span>
          <FormattedMessage
            id="home.organizations.action"
            defaultMessage="Learn more"
          />
        </span>
        <img src={require(`../General/assets/arrow.svg`)} />
      </a>
    </div>
  </PoweredSection>
)

const PoweredSection = styled(Section)`
  coinbaseposition: relative;
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
  div {
    position: absolute;
    bottom: 5%;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .discover {
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
    font-weight: 600;
    font-size: 16px;
    line-height: 154.7%;
    letter-spacing: -0.01em;
    color: rgba(255, 255, 255, 0.57);
  }
`
export default Powered
