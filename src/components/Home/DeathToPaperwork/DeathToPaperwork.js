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
    <div>
      <Title>
        <h1>Death to paperwork.</h1>
      </Title>
      <Subtitle>
        <p>Avoid useless intermediaries.</p>
      </Subtitle>
      <Emphasis>
        <p>
          Aragon companies are powered by Ethereum, a blockchain global
          computing platform.
        </p>
      </Emphasis>
      <Content>
        <p>
          A blockchain is a distributed, append-only database hardened against
          tampering and revision that provides a single shared source of
          cryptographically verified truth. This ensures that your company will
          always work, even if a government or malicious third party tries to
          tamper with it.
        </p>
        <p>
          In Ethereum, code is immutable and everything is explicitly encoded.
          It is not up to random interpretation.
        </p>
      </Content>
    </div>
  </Main>
)

export default DeathToPaperwork
