import React from 'react'
import styled from 'styled-components'
import { theme, breakpoint } from '@aragon/ui'
import { Section } from '@aragon/web'

import { SectionTitle, Anchor } from '../../'

import focus from './assets/focus.svg'
import proactive from './assets/proactive.svg'
import heart from './assets/heart.svg'

const medium = css => breakpoint('medium', css)

const Main = styled(Section)`
  padding: 50px 15px;
  background: white;

  .columns {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item {
    margin-top: 20px;
    max-width: 400px;
  }
  h2 {
    font-size: 26px;
    margin: 12px 0;
  }
  p {
    font-size: 16px;
    color: ${theme.textSecondary};
  }

  ${medium(`
    padding-top: 128px;
    padding-bottom: 128px;
    .columns {
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 70px 0;
    }
    .item {
      width: 33%;
      margin-top: 0;
      padding: 0 25px;
    }
    .item:nth-child(1) {
      padding-left: 0;
    }
    .item:nth-child(3) {
      padding-right: 0;
    }
  `)};
`

const Value = () => (
  <Main>
    <div>
      <SectionTitle title="Tips for contributing" />
      <div className="columns">
        <div className="item">
          <img src={focus} alt="" width="32" height="32" />
          <h2>Be concise</h2>
          <p>
            Try to summarize your contribution and the reasoning behind it.
            This will help the reviewers to quickly suggest changes or approve the submission
          </p>
        </div>
        <div className="item">
          <img src={proactive} alt="" width="32" height="32" />
          <h2>Proactive attitude</h2>
          <p>
            When reporting a bug or a problem, it is heplful to try to suggest a solution or a possible path forward for that issue
          </p>
        </div>
        <div className="item">
          <img src={heart} alt="" width="32" height="32" />
          <h2>Be kind</h2>
          <p>
            Our goal is to enable everyone to realize the value they can
            bring to the project and the community. Always be respectful and constructive
          </p>
        </div>
      </div>
    </div>
  </Main>
)

export default Value
