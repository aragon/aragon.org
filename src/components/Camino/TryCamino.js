import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Section from '../General/Section'
import video from '../Camino/assets/camino.mp4'
import video1 from '../Camino/assets/camino.ogv'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const TryCamino = () => (
  <VideoeSection>
    <h3>
      <FormattedMessage
        id="camino.video.title"
        defaultMessage="Organizations, re-imagined"
      />
    </h3>
    <p>
      <FormattedMessage
        id="camino.video.subtitle"
        defaultMessage="A glimpse into the future of organizations that you can use today"
      />
    </p>
    <video playsInline autoPlay muted loop>
      <source src={video1} type="video/ogg" />
      <source src={video} type="video/mp4" />
    </video>
  </VideoeSection>
)

const VideoeSection = styled(Section)`
  background-color: #062132;
  min-height: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  video {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
    margin: auto;
  }
  h3 {
    font-size: 46px;
    line-height: 59px;
    text-align: center;
    letter-spacing: -0.564706px;
    color: #ffffff;
  }
  p {
    font-size: 21px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 50px;
    color: #7f89a7;
  }
`

export default TryCamino
