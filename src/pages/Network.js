import React from 'react'
import { PageTitle, Page, AragonNetwork } from '../components'
import { Intro, AGP } from '../components/Network'

const Network = () => (
  <Page path="/network">
    <PageTitle
      title="Aragon Network"
      subtitle="Ensuring the success of decentralized organizations"
    />
    <Intro />
    <AragonNetwork />
    <AGP />
  </Page>
)

export default Network
