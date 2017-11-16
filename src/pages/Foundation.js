import React from 'react'

import {
  PageTitle,
} from '../components'

import {
  Intro,
  Grants,
} from '../components/Foundation'

const Foundation = () => (
  <div>
    <PageTitle title="Foundation" subtitle="Raising the project so it can fly alone" />
    <Intro />
    <Grants />
  </div>
)

export default Foundation
