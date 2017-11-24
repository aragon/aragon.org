import React from 'react'
import { styled } from '@aragon/ui'
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
        <Text heading="2">Tokens represent your stake in the organization</Text>
        <Text color={theme.textSecondary}>
          Your organization is in control of its funds. Transfer and assign them according to your personal needs
        </Text>
        <img src={transfer} alt="" />
      </div>
      <div>
        <SectionTitle title="Fundraising" className="title" />
        <Text heading="2">Grasp the potential of crowdfunding</Text>
        <Text color={theme.textSecondary}>
          Utilize the power of the crowd and raise funds globally, in private or publicly, without relying on banks or financial gatekeepers
        </Text>
        <img src={raise} alt="" />
      </div>
    </div>
  </Main>
)

export default Transfer
