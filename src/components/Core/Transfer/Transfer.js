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
`

const Transfer = () => (
  <Main>
    <div className="columns">
      <div>
        <SectionTitle title="Grants program" className="title" />
        <Text heading="2">Own and transfer your Tokens freely.</Text>
        <Text color={theme.textSecondary}>
          Tokens are liquid by default. You can transfer them, sell them, and truly own them. You can easily configure what the tokens let their owners do.
        </Text>
        <img src={transfer} alt="" />
      </div>
      <div>
        <SectionTitle title="Grants program" className="title" />
        <Text heading="2">Raise capital from anyone in the world, in seconds.</Text>
        <Text color={theme.textSecondary}>
          You shouldn’t have to fly over Silicon Valley and fight for a visa in order to get capital for your projects. With Aragon, you can just raise from anyone in the world.
        </Text>
        <img src={raise} alt="" />
      </div>
    </div>
  </Main>
)

export default Transfer
