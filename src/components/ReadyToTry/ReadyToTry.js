import React from 'react'
import { styled } from '@aragon/ui'
import {
  Section,
  Button,
  BreakPoint,
  font,
  theme,
  breakpoint,
} from '@aragon/ui'
import AppScreenshot from '../AppScreenshot/AppScreenshot'

import lines from './assets/background-lines.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const gradient = `linear-gradient(
  130deg,
  ${theme.mainBgGradientStart},
  ${theme.mainBgGradientEnd}
)`

const Main = styled(Section)`
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-image: ${gradient};
  border-bottom: 1px solid ${theme.mainBgGradientStart};
  .in {
    padding: 30px 15px 0;
  }
  .content {
    align-self: center;
    max-width: 410px;
    flex-shrink: 0;
    padding-bottom: 15px;
    padding-bottom: 40px;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${theme.textPrimary};
  }
  .subtitle {
    font-size: 17px;
    color: ${theme.textSecondary};
  }
  .app-img {
    max-width: none;
    width: calc(30px + 140%);
    margin-bottom: -30%;
  }
  .buttons {
    margin-top: 25px;
  }
  .buttons > * {
    margin-right: 10px;
  }

  ${medium(`
    background-image: url(${lines}), ${gradient};
    .in {
      display: flex;
      padding-top: 50px;
    }
    .title {
      font-size: 38px;
    }
    .subtitle {
      font-size: 18px;
    }
    .app-img {
      margin-right: -90px;
      margin-left: 90px;
    }
    .buttons {
      margin-top: 50px;
    }
  `)};
`

const ReadyToTry = () => (
  <Main>
    <div className="in">
      <div className="content">
        <h1 className="title">Ready to try Aragon?</h1>
        <p className="subtitle">Download Aragon Core alpha v0.4 for macOS</p>
        <BreakPoint to="medium">
          <div className="buttons">
            <Button>Web version</Button>
            <Button mode="strong">Aragon Core</Button>
          </div>
        </BreakPoint>
        <BreakPoint from="medium">
          <div className="buttons">
            <Button>Try the Web version</Button>
            <Button mode="strong">Download Aragon Core</Button>
          </div>
        </BreakPoint>
      </div>
      <div className="app-img">
        <AppScreenshot />
      </div>
    </div>
  </Main>
)

export default ReadyToTry
