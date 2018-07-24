import React from 'react'
import styled from 'styled-components'
import { BreakPoint, font, theme, breakpoint } from '@aragon/ui'
import { Section } from '@aragon/web'

import { Anchor } from '../'
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
      font-size: 15px;
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
        <p className="subtitle">
          Thanks to <a href="https://hack.aragon.org/" target="_blank" rel="noopener noreferrer">aragonOS</a>, Aragon Core v0.5 is the most
          powerful way to create and manage any type of decentralized
          organizations.
        </p>
        <BreakPoint to="medium">
          <div className="buttons">
            <Anchor
              mode="strong"
              href="https://app.aragon.org/"
              target="_blank"
            >
              Try Aragon Core 0.5
            </Anchor>
            <Anchor
              href="https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&id=e81a44c4bd"
              target="_blank"
            >
              Newsletter
            </Anchor>
          </div>
        </BreakPoint>
        <BreakPoint from="medium">
          <div className="buttons">
            <Anchor
              mode="strong"
              href="https://app.aragon.org/"
              target="_blank"
            >
              Try Aragon Core 0.5
            </Anchor>
            <Anchor
              href="https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&id=e81a44c4bd"
              target="_blank"
            >
              Subscribe to the newsletter
            </Anchor>
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
