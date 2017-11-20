import React from 'react'
import { PageTitle, Page } from '../components'
import { Tokens, Transfer, Customize, Vote, Finance } from '../components/Core'

const Core = () => (
  <Page path="/core">
    <PageTitle
      title="Aragon Core"
      subtitle="Decentralized application to run your organization"
    />
    <Tokens />
    <Transfer />
    <Customize />
    <Vote />
    <Finance />
  </Page>
)

export default Core
