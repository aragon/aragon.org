import React from 'react'
import { PageTitle, Page } from '../components'
import { Intro, Grants } from '../components/Foundation'

const Foundation = () => (
  <Page path="/foundation">
    <PageTitle
      title="Foundation"
      subtitle="Raising the project so it can fly alone"
    />
    <Intro />
    <Grants />
  </Page>
)

export default Foundation
