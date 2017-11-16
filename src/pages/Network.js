import React from 'react'

import {
  PageTitle,
  AragonNetwork,
} from '../components'

import {
  Intro,
  AGP,
} from '../components/Network'

const Network = () => (
  <div>
    <PageTitle title="Aragon Network" subtitle="Raising the project so it can fly alone" />
    <Intro />
    <AragonNetwork />
    <AGP />
  </div>
)

export default Network
