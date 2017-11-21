import React from 'react'
import { LogosBar, ReadyToTry, AragonNetwork, Page } from '../components'
import {
  UnstoppableOrganizations,
  Disintermediating,
  DeathToPaperwork,
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
