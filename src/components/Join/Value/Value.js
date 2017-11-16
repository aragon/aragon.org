import React from 'react'
import styled from 'styled-components'
import { Section, Button, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle.js'

import focus from './assets/focus.svg'
import proactive from './assets/proactive.svg'
import heart from './assets/heart.svg'

const Main = styled(Section)`
  padding-top: 128px;
  padding-bottom: 128px;
  background: white;

  h1 {
    font-size: 26px;
    margin: 12px 0;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }
  .columns > div {
    width: 33%;
    padding: 0 25px;
  }
  .columns > div:nth-child(1) {
    padding-left: 0;
  }
  .columns > div:nth-child(3) {
    padding-right: 0;
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
`

const Value = () => (
  <Main>
    <div>
      <SectionTitle title="Things we value in people" />
      <div className="columns">
        <div>
          <img src={focus} alt="" />
          <h1>Focus-driven work</h1>
          <p>Focus-driven work,  not 
hours-driven.</p>
        </div>
        <div>
          <img src={proactive} alt="" />
          <h1>Proactive attitude</h1>
          <p>Autonomous workers with a proactive attitude and a love for time self-management.</p>
        </div>
        <div>
          <img src={heart} alt="" />
          <h1>Your value</h1>
          <p>We value what you can do and your attitude doing it, not where/whether you went to school or college.
</p>
        </div>
      </div>
      <div className="cta">
        <Button mode="outline">View open positions</Button>
        <Button mode="strong">Apply now</Button>
      </div>
    </div>
  </Main>
)

export default Value
