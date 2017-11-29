import React from 'react'
import { styled } from '@aragon/ui'

import appScreen from './assets/app-screen.svg'

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  text-align: center;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 4px 64px rgba(149, 149, 149, 0.2);
`

const AppScreenshot = props => (
  <StyledImg
    src={appScreen}
    width="1140"
    height="508"
    alt="Aragon"
    {...props}
  />
)

export default AppScreenshot
