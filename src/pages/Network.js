import React from 'react'
import { PageTitle, Page, AragonNetwork } from '../components'
import { Intro, AGP } from '../components/Network'

const Network = () => (
  <Page path="/network">
    <PageTitle
      title="Aragon Network"
      subtitle="Raising the project so it can fly alone"
    />
    <Intro />
    <AragonNetwork />
    <AGP />
  </Page>
)

export default Network
