import React, { Component } from 'react'

export class Redirect extends Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.location = 'https://poweredby.aragon.org/'
    }
  }
  render() {
    return <section />
  }
}

export default Redirect
