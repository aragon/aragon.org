import React from 'react'
import { PageTitle, Page, Anchor } from '../components'
import { HowToHelp, Value } from '../components/Contribute'

const Contribute = () => (
  <Page path="/contribute">
    <PageTitle
      title="Contribute"
      subtitle="We are building the future of governance"
    >
    </PageTitle>
    <HowToHelp />
    <Value />
  </Page>
)

export default Contribute
