import React from 'react'
import styled from 'styled-components'
import { Section, Button, theme } from '@aragon/ui'

import illustration from './assets/app-screen.svg'
import lines from './assets/background-lines.svg'

const Main = styled(Section)`
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-image: url(${lines}),
    linear-gradient(130deg, ${theme.mainBgGradientStart}, ${theme.mainBgGradientEnd});
  border-bottom: 1px solid ${theme.mainBgGradientStart};
  .in {
    display: flex;
    padding-top: 50px;
  }
  .content {
    align-self: center;
    width: 410px;
    flex-shrink: 0;
  }
  .title {
    font-size: 38px;
    margin-bottom: 20px;
    color: ${theme.textPrimary};
  }
  .subtitle {
    font-size: 19px;
    color: ${theme.textSecondary};
  }
  .illustration {
    margin-right: -90px;
  }
  .buttons {
    margin-top: 50px;
  }
  .buttons > * {
    margin-right: 10px;
  }
`

const ReadyToTry = () => (
  <Main>
    <div className="in">
      <div className="content">
        <h1 className="title">Ready to try Aragon?</h1>
        <p className="subtitle">Download Aragon Alpha for macOS</p>
        <div className="buttons">
          <Button>Try web version</Button>
          <Button mode="strong">Download Aragon</Button>
        </div>
      </div>
      <img className="illustration" src={illustration} alt="" />
    </div>
  </Main>
)

export default ReadyToTry
