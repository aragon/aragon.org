import React from 'react'
import styled from 'styled-components'
import { Section, Text, theme } from '@aragon/ui'

import background from './assets/background.svg'
import appScreen from './assets/app-screen.svg'

const StyledContainer = styled(Section)`
  padding-top: 170px;
  text-align: center;
  background: url(${background}) no-repeat 50% -60px;
  .title {
    margin-bottom: 25px;
    font-size: 58px;
    color: ${theme.textPrimary};
  }
  .subtitle {
    margin-bottom: 15px;
    font-size: 24px;
    color: ${theme.textSecondary};
  }
  .app-wrapper {
    display: flex;
    align-items: center;
  }
  .app {
    display: block;
    margin-left: 50%;
    max-width: 100%;
    transform: translateX(-50%);
    flex-shrink: 0;
    text-align: center;
  }
`

const UnstoppableOrganizations = () => {
  return (
    <StyledContainer>
      <div>
        <h1 className="title">Unstoppable organizations</h1>
        <Text size="large" className="subtitle">
          Create value without borders or intermediaries
        </Text>
        <div className="app-wrapper">
          <img
            className="app"
            src={appScreen}
            width="1140"
            height="508"
            alt="Aragon App"
          />
        </div>
      </div>
    </StyledContainer>
  )
}

export default UnstoppableOrganizations
