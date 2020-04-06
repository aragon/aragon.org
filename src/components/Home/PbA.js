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
import background1 from './home-assets/pba-1.png'
import background2 from './home-assets/pba-2.png'
import background3 from './home-assets/pba-3.png'

import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const PbA = () => (
  <PbASection>
    <h3>
      <FormattedHTMLMessage
        id="home.pba.title"
        defaultMessage='Empowering <br /> <span class="blue">innovative communities </span>'
      />
    </h3>
    <Container>
      <PbACard className="one">
        <FormattedMessage
          id="home.pba.card1"
          defaultMessage="Jesse launched the Streaks DAO to incentivize internal daily usage ofCoinbase apps."
        />
      </PbACard>
      <PbACard className="two">
        <FormattedMessage
          id="home.pba.card2"
          defaultMessage="Jenna launched the Melon Council DAO to expand access to wealth management."
        />
      </PbACard>
      <PbACard className="three">
        <FormattedMessage
          id="home.pba.card3"
          defaultMessage="Esteban launched the Decentraland DAO to enable the first user-governed decentralized virtual world."
        />
      </PbACard>
    </Container>
    <a className="action-button centered" href="">
      <span>
        <FormattedMessage
          id="home.pba.action"
          defaultMessage="More communities"
        />
        <img src={require(`../General/assets/arrow.svg`)} />
      </span>
    </a>
  </PbASection>
)

const PbASection = styled(Section)`
  position: relative;
  height: auto;
  background: white;
  overflow: hidden;
  text-align: center;
  .blue {
    background: -webkit-linear-gradient(69deg, #65aaff, #5d21d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    letter-spacing: -0.447059px;
    margin: 50px 0 50px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
  }
`
const PbACard = styled.div`
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.58) 1.25%,
    rgba(0, 0, 0, 0) 44.68%
  );
  border-radius: 9px;
  overflow: hidden;
  height: 479px;
  background-size: cover;
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: flex-end;
  max-width: 340px;
  margin: auto;
  ${large('max-width: inherit;')};
  padding: 18px;
  &.one {
    background-image: url(${background1});
  }
  &.two {
    background-image: url(${background2});
  }
  &.three {
    background-image: url(${background3});
  }
`
const Container = styled.div`
  display: grid;
  ${large(
    'grid-template-columns: calc(33.33% - 15px) calc(33.33% - 15px) calc(33.33% - 15px); grid-template-rows: auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  align-items: center;
  margin-bottom: 50px;
`

export default PbA
