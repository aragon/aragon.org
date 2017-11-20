import React from 'react'
import styled from 'styled-components'
import { Section, Text, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle.js'

import transfer from './assets/transfer.png'
import raise from './assets/raise.png'

const Main = styled(Section)`
  padding-top: 128px;
  padding-bottom: 128px;
  background: #fff;

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

  .title h1 {
    text-align: left;
  }
`

const Transfer = () => (
  <Main>
    <div className="columns">
      <div>
        <SectionTitle title="Transfer tokens" className="title" />
        <Text heading="2">Appoint and actuate your assets freely</Text>
        <Text color={theme.textSecondary}>
          You are in control of the flow of your funds. Transfer and assign them according to your personal needs
        </Text>
        <img src={transfer} alt="" />
      </div>
      <div>
        <SectionTitle title="Fundraising" className="title" />
        <Text heading="2">Grasp the potential of crowdfunding</Text>
        <Text color={theme.textSecondary}>
          Having access to capital that is necessary for you to build your organization should be simple. Utilize the power of the crowd and raise funds globally, in private or publicly. Using Aragon let’s you focus on what matters the most: building your product or service
        </Text>
        <img src={raise} alt="" />
      </div>
    </div>
  </Main>
)

export default Transfer
