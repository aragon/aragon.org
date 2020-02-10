import React from 'react'
import styled from 'styled-components'
import {
  FormattedMessage,
  FormattedHTMLMessage,
  injectIntl,
  intlShape,
} from 'react-intl'
import Section from '../General/Section'
import Juror from './home-assets/juror.svg'

import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Court = () => (
  <CourtSection>
    <TextContainer>
      <h2>Aragon Court</h2>
      <p>
        <FormattedHTMLMessage
          id="home.court.description"
          defaultMessage="Aragon Court handles subjective disputes that<br />require the judgment of human jurors."
        />
      </p>
      <a className="action-button court-link" href="/court">
        <span>
          <FormattedMessage
            id="home.organizations.action"
            defaultMessage="Learn more"
          />
          <img src={require(`../General/assets/arrow-white.svg`)} />
        </span>
      </a>
    </TextContainer>
    <JurorImage src={Juror} />
  </CourtSection>
)

const CourtSection = styled(Section)`
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${medium('height: 581px;')}
  background: linear-gradient(20.03deg, #FFC58F -24.01%, #FF7C7C 86.23%);
  overflow: hidden;
`

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  height: 100%;
  width: 100%;

  p {
    line-height: 35px;
    font-size: 22px;
    text-align: center;
    letter-spacing: 0.33px;
    margin: 0 auto;
    color: white;
  }

  .court-link {
    color: white;
  }
`

const JurorImage = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 25%;
  @media screen and (max-width: 1024px) {
    left: 15%;
  }
  @media screen and (max-width: 768px) {
    left: 0%;
  }
  @media screen and (max-width: 414px) {
    top: 5%;
    left: -40%;
  }
`

export default Court
