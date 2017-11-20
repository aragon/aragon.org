import React from 'react'
import { Button } from '@aragon/ui'
import { PageTitle, Page } from '../components'
import { Culture, Value } from '../components/Join'

const Join = () => (
  <Page path="/join">
    <PageTitle title="Join us" subtitle="We are democratizing governance">
      <a href="https://wiki.aragon.one/jobs"><Button mode="outline">View open positions</Button></a>
      <Button mode="strong">Apply now</Button>
    </PageTitle>
    <Culture />
    <Value />
  </Page>
)

export default Join
