import React from 'react'
import { ReadyToTry, AragonNetwork, Page } from '../components'
import {
  UnstoppableOrganizations,
  Disintermediating,
  DeathToPaperwork,
  LogosBar,
} from '../components/Home'

const Home = () => (
  <Page path="/">
    <UnstoppableOrganizations />
    <Disintermediating />
    <LogosBar />
    <DeathToPaperwork />
    <ReadyToTry />
    <AragonNetwork />
  </Page>
)

export default Home
