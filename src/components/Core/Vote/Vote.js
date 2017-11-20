import React from 'react'
import styled from 'styled-components'
import { Section, Text, theme } from '@aragon/ui'

import vote from './assets/vote.png'
import sign from './assets/sign.png'

const Main = styled(Section)`
  padding-top: 128px;
  padding-bottom: 128px;

  img {
    max-width: 100%;
    border: 1px solid #DBEBEA;
    border-radius: 5px;
    margin-top: 50px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }
  .columns > div {
    width: 50%;
  }
  .columns > div:nth-child(1) {
    padding-right: 15px;
    text-align: left;
  }
  .columns > div:nth-child(2) {
    padding-left: 15px;
    text-align: right;
  }

  .columns > div:nth-child(1) .title {
    text-align: left;
  }

  .columns > div:nth-child(2) .title {
    text-align: right;
  }
`

const Vote = () => (
  <Main>
    <div className="columns">
      <div>
        <Text heading="2">Decision-making by voting</Text>
        <Text color={theme.textSecondary}>
        Use voting for more effective results. Votes are a secure, transparent and unforgeable way to come to a decision on major issues
        </Text>
        <img src={vote} alt="" />
      </div>
      <div>
        <Text heading="2">Assign roles</Text>
        <Text color={theme.textSecondary}>
        By assigning different roles you can leave the mundane decisions of day-to-day activity to designated people
        </Text>
        <img src={sign} alt="" />
      </div>
    </div>
  </Main>
)

export default Vote
