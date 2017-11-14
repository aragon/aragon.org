import React from 'react'

import {
  UnstoppableOrganizations,
  Disintermediating,
  LogosBar,
  DeathToPaperwork,
  ReadyToTry,
  AragonNetwork,
} from '../components'

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
