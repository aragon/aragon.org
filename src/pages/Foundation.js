import React from 'react'
import { PageTitle, Page } from '../components'
import { Intro, Grants } from '../components/Foundation'

const Foundation = () => (
  <Page path="/foundation">
    <PageTitle
      title="Foundation"
      subtitle="Cornerstone for architecting the project"
    />
    <Intro />
    <Grants />
  </Page>
)

export default Foundation
