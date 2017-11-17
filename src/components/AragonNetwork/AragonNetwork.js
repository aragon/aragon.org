import React from 'react'
import styled from 'styled-components'
import { IllustratedSection } from '@aragon/ui'
import illustration from './assets/illustration.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Main = styled(IllustratedSection)`
  background: #fff;
`

const AragonNetwork = () => (
  <Main>
    <Illustration>
      <img src={illustration} alt="" />
    </Illustration>
    <Title>
      <h1>The Aragon Network</h1>
    </Title>
    <Subtitle>
      <p>A digital jurisdiction.</p>
    </Subtitle>
    <Emphasis>
      <p>
        The Aragon Network (AN) will be the first DAO whose goal is to act as a
        digital jurisdiction that makes it extremely easy and friendly for
        organizations, entrepreneurs and investors to operate.
      </p>
    </Emphasis>
    <Content>
      <p>
        Aragon organizations will be able to be seamlessly upgraded and solve
        human disputes using a decentralized court system.
      </p>
      <p>
        The Aragon Network has its own token, ANT, which will be used to govern
        every single aspect of its functioning.
      </p>
    </Content>
  </Main>
)

export default AragonNetwork
