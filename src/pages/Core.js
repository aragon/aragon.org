import React from 'react'

import {
  PageTitle,
} from '../components'

import {
  Tokens,
  Transfer,
} from '../components/Core'

const Core = () => (
  <div>
    <PageTitle title="Aragon Core" subtitle="The decentralized app to run blockchain organizations" />
    <Tokens />
    <Transfer />
  </div>
)

/*

Transfer,
  Customize,
  Finance,

<Tokens />
    <Transfer />
    <Customize />
    <Finance />

    */

export default Core
