import React from 'react'
import { styled } from '@aragon/ui'
import { Section } from '@aragon/ui'
import logos from './assets/logos.png'

import economist from './assets/economist.svg'
import financemagnates from './assets/financemagnates.svg'
import forbes from './assets/forbes.svg'
import ibt from './assets/ibt.svg'
import nasdaq from './assets/nasdaq.svg'
import reuters from './assets/reuters.svg'

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
  img {
    max-width: 128px;
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
    <a href="https://www.economist.com/news/world-if/21724906-trust-business-little-noticed-huge-startups-deploying-blockchain-technology-threaten"><img src={economist} alt="" /></a>
    <a href=""><img src={financemagnates} alt="" /></a>
    <a href=""><img src={forbes} alt="" /></a>
    <a href=""><img src={ibt} alt="" /></a>
    <a href=""><img src={nasdaq} alt="" /></a>
    <a href="https://www.reuters.com/article/us-aragon-blockchain-funding/blockchain-token-sale-nets-25-million-in-under-15-minutes-idUSKCN18E32X"><img src={reuters} alt="" /></a>

  </Main>
)

export default LogosBar
