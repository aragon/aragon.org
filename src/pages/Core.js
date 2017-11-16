import React from 'react'

import {
  PageTitle,
} from '../components'

import {
  Tokens,
  Transfer,
  Customize,
  Vote,
  Finance,
} from '../components/Core'

const Core = () => (
  <div>
    <PageTitle title="Aragon Core" subtitle="The decentralized app to run blockchain organizations" />
    <Tokens />
    <Transfer />
    <Customize />
    <Vote />
    <Finance />
  </div>
)

export default Core
