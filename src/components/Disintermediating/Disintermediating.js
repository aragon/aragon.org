import React from 'react'
import styled from 'styled-components'
import { IllustratedSection, themeDark } from '@aragon/ui'

import illustration from './assets/illustration.svg'
import background from './assets/background.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 200px;
`

const Main = styled(IllustratedSection)`
  margin-top: calc(-200px - 235px);
  padding-top: 235px;
  padding-bottom: 140px;
  background: url(${background}) no-repeat 50% 0;
`

const Disintermediating = () => (
  <Wrapper>
    <Main>
      <div>
        <Title>
          <h1>Disintermediating human trade  and business</h1>
        </Title>
        <Subtitle dark>
          <p>It’s the first step towards a more fair, efficient world.</p>
        </Subtitle>
        <Emphasis dark>
          <p>
            We believe decentralized organizations can solve the world’s worst
            problems. That's why we are building Aragon.
          </p>
        </Emphasis>
        <Content dark>
          <p>
            Aragon lets you manage entire organizations using the blockchain.
            This makes Aragon organizations more efficient than their
            traditional counterparties. By making it possible for everyone in
            the world to organize, we are enabling the borderless,
            permissionless creation of value.
          </p>
        </Content>
      </div>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default Disintermediating
