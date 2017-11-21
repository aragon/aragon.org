import React from 'react'
import { Button, styled } from '@aragon/ui'
import { PageTitle, Page } from '../components'
import { Culture, Value } from '../components/Join'

const Anchor = styled(Button)``.withComponent('a')

const Join = () => (
  <Page path="/join">
    <PageTitle title="Join us" subtitle="We are building the future of organizations">
      <Anchor mode="outline" href="https://wiki.aragon.one/jobs">View open positions</Anchor>
      <Anchor mode="strong" href="https://wiki.aragon.one/jobs">Apply now</Anchor>
    </PageTitle>
    <Culture />
    <Value />
  </Page>
)

export default Join
