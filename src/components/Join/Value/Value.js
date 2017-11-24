import React from 'react'
import { styled } from '@aragon/ui'
import { Section, theme, breakpoint } from '@aragon/ui'

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
  .cta {
    text-align: center;
    margin-top: 50px;
  }
  .cta button {
    margin: 0 5px;
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
      <SectionTitle title="Things we value in people" />
      <div className="columns">
        <div className="item">
          <img src={focus} alt="" />
          <h2>Focus-driven work</h2>
          <p>We don't necessarily work 9-5; getting the work done, meeting goals and milestones is more important. You can work however it suits your personal schedule as long as you're focused on delivering quality work
          </p>
        </div>
        <div className="item">
          <img src={proactive} alt="" />
          <h2>Proactive attitude</h2>
          <p>
            Working remotely and autonomously, having a positive and proactive
            attitude with a love for time self-management is essential to our
            day-to-day operations
          </p>
        </div>
        <div className="item">
          <img src={heart} alt="" />
          <h2>The value that you bring</h2>
          <p>Every person has a unique set of skills that bring meaning to what we are doing. We value what you can do and your attitude in doing it. Our goal is to enable you to realize the value which you can bring, no matter where/whether you went to college
          </p>
        </div>
      </div>
      <div className="cta">
        <Anchor mode="strong" href="https://wiki.aragon.one/jobs">View open positions</Anchor>
      </div>
    </div>
  </Main>
)

export default Value
