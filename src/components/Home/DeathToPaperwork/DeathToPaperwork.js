import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'
import { IllustratedSection } from '@aragon/web'

import illustration from './assets/illustration.svg'
import blockchain from './assets/blockchain.svg'
import ethereum from './assets/ethereum.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Main = styled(IllustratedSection)`
  background: #fff;
  border-top: 1px solid ${theme.contentBackgroundActive};

  ul {
    padding-left: 25px;
    list-style: none;
    margin-bottom: 25px;
  }

  ul#blockchain {
    background: url(${blockchain}) no-repeat left top;
  }

  ul#ethereum {
    background: url(${ethereum}) no-repeat left top;
  }
`

const DeathToPaperwork = () => (
  <Main>
    <Illustration>
      <img src={illustration} alt="" />
    </Illustration>
    <Title>
      <h1>Goodbye unnecessary intermediaries</h1>
    </Title>
    <Subtitle>
      <p>Reclaim your independence</p>
    </Subtitle>
    <Emphasis>
      <p>
        Aragon organizations are powered by Ethereum, a global blockchain for
        running unstoppable applications. In Ethereum, code and applications
        always run without any possibility of downtime or censorship
      </p>
    </Emphasis>
    <Content>
      <ul id="blockchain">
        <li>
          Blockchain technology provides a single shared source of
          cryptographically verified truth. This is secured by a network made up
          of thousands of computers all over the globe. Anyone can set up their
          own node where all the necessary data is replicated across the network
        </li>
      </ul>
      <ul id="ethereum">
        <li>
          This decentralized design ensures a borderless and permissionless way
          of operating, without the fear of a government or a malicious
          third-party interfering
        </li>
      </ul>
    </Content>
  </Main>
)

export default DeathToPaperwork
