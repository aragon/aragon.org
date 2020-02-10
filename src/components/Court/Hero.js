import React, { useRef } from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import Section from '../General/Section'
import Juror from '../Home/home-assets/juror.svg'
import Video from './court-assets/video.png'

const Hero = () => {
  const videoRef = useRef()
  return (
    <CourtSection>
      <div className="hero-message">
        <TextContainer>
          <h2>Aragon Court</h2>
          <p>
            <FormattedHTMLMessage
              id="court.hero.description"
              defaultMessage="Participate in the world’s first digital jurisdiction by<br/>becoming a juror for Aragon Court"
            />
          </p>
          <a className="action-button court-link" href="/court" target="https://court.aragon.org/">
            <span>
              <FormattedMessage
                id="court.hero.action"
                defaultMessage="Try the court"
              />
              <img src={require(`../General/assets/arrow-white.svg`)} />
            </span>
          </a>
        </TextContainer>
        <JurorImage src={Juror} />
      </div>
      <div className="hero-video">
        <VideoImg src={Video} />
      </div>
    </CourtSection>
  )
}

const CourtSection = styled(Section)`
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 150vh;
  // padding-top: 48px;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(37.89deg, #ffc58f -23.97%, #ff7c7c 62.2%);
  overflow: hidden;
  .hero-message {
    display: block;
    margin-bottom: 120px;
  }

  .hero-video {
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1024px) {
    min-height: 100vh;
    padding-top: 128px;
  }
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
  top: 3%;
  left: 27%;
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

const VideoImg = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
`
export default Hero
