import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import darkModeTitle from './assets/dark-mode-title.svg'
import darkModeImage from './assets/darkmodeimage.png'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const DarkMode = () => (
  <DarkModeSection>
    <h3>
      Work late with <img src={darkModeTitle} />
    </h3>
    <p>See your organization in a whole new light</p>
    <img src={darkModeImage} />
  </DarkModeSection>
)

const DarkModeSection = styled(Section)`
  background-color: #141926;
  min-height: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  h3 {
    font-size: 46px;
    line-height: 59px;
    text-align: center;
    letter-spacing: -0.564706px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${medium('flex-direction: row;')}
    img {
      padding-left: 20px;
    }
  }
  p {
    font-size: 21px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 50px;
    color: #7f89a7;
  }
  img {
    max-width: 100%;
  }
`

export default DarkMode
