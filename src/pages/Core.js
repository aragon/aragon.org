import React from 'react'
import { PageTitle, Page } from '../components'
import { Tokens, Transfer, Customize, Vote, Finance } from '../components/Core'

const Core = () => (
  <Page path="/core">
    <PageTitle
      title="Aragon Core"
      subtitle="The decentralized app to run blockchain organizations"
    />
    <Tokens />
    <Transfer />
    <Customize />
    <Vote />
    <Finance />
  </Page>
)

export default Core
