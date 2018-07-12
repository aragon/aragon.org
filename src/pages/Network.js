import React from 'react'
import { PageTitle, Page, AragonNetwork, Anchor } from '../components'
import { Intro, AGP } from '../components/Network'

const Network = () => (
  <Page path="/network">
    <PageTitle
      title="Aragon Network"
      subtitle="Ensuring the success of decentralized organizations"
    >
      <Anchor mode="strong" href="https://github.com/aragon/whitepaper">
        Read whitepaper
      </Anchor>
    </PageTitle>
    <Intro />
    <AragonNetwork />
    <AGP />
  </Page>
)

export default Network
