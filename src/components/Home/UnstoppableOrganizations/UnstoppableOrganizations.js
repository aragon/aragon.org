import React from 'react'
import styled, { css } from 'styled-components'
import {
  Section,
  Text,
  theme,
  breakpoint,
  BreakPoint,
  Button,
} from '@aragon/ui'

import background from './assets/background.svg'
import appScreen from './assets/app-screen.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const StyledContainer = styled(Section)`
  text-align: center;
  background: url(${background}) no-repeat 50% -60px;
  padding: 40px 15px 0;
  ${medium('padding-top: 120px')};
  ${large('padding-top: 160px')};

  .title {
    color: ${theme.textPrimary};
    margin-bottom: 15px;
    font-size: 62px;
    line-height: 1.2;
    ${medium(`
      margin-bottom: 25px;
      font-size: 58px
      line-height: 1.5;
    `)};
  }
  .subtitle {
    position: relative;
    z-index: 2;
    font-size: 20px;
    ${medium('font-size: 24px')};
    color: ${theme.textSecondary};
  }
  .app-wrapper {
    display: flex;
    align-items: center;
  }
  .app-img {
    display: block;
    margin-left: 50%;
    max-width: 100%;
    height: auto;
    transform: translateX(-50%);
    flex-shrink: 0;
    text-align: center;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 4px 64px rgba(149, 149, 149, 0.2);
    margin-top: 40px;
    ${medium('margin-top: 75px')};
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin: 20px auto 0;
  }
  .button:first-child {
    margin-right: 10px;
  }
`

const UnstoppableOrganizations = () => (
  <StyledContainer>
    <div>
      <h1 className="title">Unstoppable organizations</h1>
      <Text size="large" className="subtitle">
        Create value without borders or intermediaries
      </Text>
      <BreakPoint to="medium">
        <div className="buttons">
          <div className="button">
            <Button mode="outline">Try the web version</Button>
          </div>
          <div className="button">
            <Button mode="strong">Download Aragon Core</Button>
          </div>
        </div>
      </BreakPoint>
      <div className="app-wrapper">
        <img
          className="app-img"
          src={appScreen}
          width="1140"
          height="508"
          alt="Aragon App"
        />
      </div>
    </div>
  </StyledContainer>
)

export default UnstoppableOrganizations
