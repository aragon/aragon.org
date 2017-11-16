import React from 'react'

import {
  LogosBar,
  ReadyToTry,
  AragonNetwork,
} from '../components'

import {
  UnstoppableOrganizations,
  Disintermediating,
  DeathToPaperwork,
} from '../components/Home'

class Home extends React.Component {
  render() {
    return (
      <div>
        <UnstoppableOrganizations />
        <Disintermediating />
        <LogosBar />
        <DeathToPaperwork />
        <ReadyToTry />
        <AragonNetwork />
      </div>
    )
  }
}

export default Home
