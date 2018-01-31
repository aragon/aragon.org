import React from 'react'
import { PageTitle, Page } from '../components'
import { Snippet, Docs } from '../components/OS'

const OS = () => (
  <Page path="/os">
    <PageTitle
      title="aragonOS"
      subtitle="The smart contract framework for dapps and protocols"
    />
    <Snippet />
    <Docs />
  </Page>
)

export default OS
