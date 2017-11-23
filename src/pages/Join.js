import React from 'react'
import { Button, styled } from '@aragon/ui'
import { PageTitle, Page } from '../components'
import { Culture, Value } from '../components/Join'

const Anchor = ({ href, ...props }) => (
  <a href={href}>
    <Button {...props} />
  </a>
)

const Join = () => (
  <Page path="/join">
    <PageTitle
      title="Join us"
      subtitle="We are building the future of organizations"
    >
      <Anchor mode="strong" href="https://wiki.aragon.one/jobs">
        View open positions
      </Anchor>
    </PageTitle>
    <Culture />
    <Value />
  </Page>
)

export default Join
