import React from 'react'
import styled from 'styled-components'
import { Section } from '@aragon/ui'
import logos from './assets/logos.png'

const Main = styled(Section)`
  padding: 30px 0;
  background: #FFF;
  .title {
    text-align: center;
    text-transform: uppercase;
  }
  .logos {
    display: block;
    margin: 0 auto;
    width: 100%;
    mix-blend-mode: multiply;
  }
`

const LogosBar = () => (
  <Main>
    <h1 className="title">As seen on</h1>
    <img
      className="logos"
      src={logos}
      width="1111"
      alt="CoinFund, Conomi, ShapeShift, BoostVC, Wachsman PR, Novak Rutar."
    />
  </Main>
)

export default LogosBar
