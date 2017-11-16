import React from 'react'
import { Button } from '@aragon/ui'

import {
  PageTitle,
} from '../components'

import {
  Culture,
  Value,
} from '../components/Join'

const Join = () => (
  <div>
    <PageTitle title="Join us" subtitle="We are democratizing governance">
      <Button mode="outline">View open positions</Button>
      <Button mode="strong">Apply now</Button>
    </PageTitle>
    <Culture />
    <Value />
  </div>
)

export default Join
