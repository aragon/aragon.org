import React from 'react'
import { styled } from '@aragon/ui'
import { ReadyToTry, AragonNetwork, Page } from '../components'
import {
  UnstoppableOrganizations,
  Disintermediating,
  DeathToPaperwork,
  LogosBar,
} from '../components/Home'

const FirstSection = styled.div`
  margin-bottom: 200px;
`

const Home = () => (
  <Page path="/">
    <FirstSection>
      <UnstoppableOrganizations />
    </FirstSection>
    <Disintermediating />
    <LogosBar />
    <DeathToPaperwork />
    <ReadyToTry />
    <AragonNetwork />
  </Page>
)

export default Home
