import React from 'react'
import styled from 'styled-components'
import { IllustratedSection, theme } from '@aragon/ui'
import illustration from './assets/illustration.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Main = styled(IllustratedSection)`
  background: #fff;
  border-top: 1px solid ${theme.contentBackgroundActive};
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
      <p>
        Blockchain technology provides a single shared source of
        cryptographically verified truth. This is secured by a network made up
        of thousands of people all over the globe. Anyone can set up their own
        node where all the necessary data in the network is replicated across
        these nodes.
      </p>
      <p>
        This decentralized manner ensures a borderless and
        permissionless way of operating, without the fear of a government or a
        malicious third-party interfering
      </p>
    </Content>
  </Main>
)

export default DeathToPaperwork
