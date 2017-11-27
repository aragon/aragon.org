import React from 'react'
import { styled } from '@aragon/ui'
import { Section } from '@aragon/ui'
import logos from './assets/logos.png'

import economist from './assets/economist.svg'
import coindesk from './assets/coindesk.svg'
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
    width: 100%;
    margin-bottom: 10px;
  }
  .logos {
    margin: 0 auto;
    width: 100%;
    mix-blend-mode: multiply;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a, img {
    width: 128px;
    max-height: 64px;
  }
  a {
    flex: 1;
    flex-basis: 0;
    filter: grayscale(100%);
    transition: all 200ms;
  }
  a:hover {
    filter: none;
  }
  .coindesk, .ibt, .nasdaq {
    filter: opacity(50%) grayscale(100%);
  }
  .forbes, .reuters, .economist {
    filter: opacity(75%) grayscale(100%);
  }
  .ibt, .ibt img {
    flex: 0;
    width: 92px;
  }
`

const LogosBar = () => (
  <Main>
    <h1 className="title">As seen on</h1>
    <div className="logos">
      <a className="coindesk" href="https://www.coindesk.com/dao-manager-aragon-alpha-ethereum/" target="_blank" rel="noopener noreferrer"><img src={coindesk} alt="" /></a>
      <a className="economist" href="https://www.economist.com/news/world-if/21724906-trust-business-little-noticed-huge-startups-deploying-blockchain-technology-threaten" target="_blank" rel="noopener noreferrer"><img src={economist} alt="" /></a>
      <a className="forbes" href="https://www.forbes.com/sites/rogeraitken/2017/04/20/forbes-under-30-tech-prodigy-in-cryptosale-for-decentralized-jurisdiction-platform/" target="_blank" rel="noopener noreferrer"><img src={forbes} alt="" /></a>
      <a className="reuters" href="https://www.reuters.com/article/us-aragon-blockchain-funding/blockchain-token-sale-nets-25-million-in-under-15-minutes-idUSKCN18E32X" target="_blank" rel="noopener noreferrer"><img src={reuters} alt="" /></a>
      <a className="nasdaq" href="http://www.nasdaq.com/article/disintermediating-entrepreneurship-iis-the-first-step-towards-a-fairer-world-cm806430" target="_blank" rel="noopener noreferrer"><img src={nasdaq} alt="" /></a>    
      <a className="ibt" href="http://www.ibtimes.co.uk/ethereum-based-aragon-leads-blockchain-exodus-slack-amid-phishing-scams-1640474" target="_blank" rel="noopener noreferrer"><img src={ibt} alt="" /></a>
    </div>
  </Main>
)

export default LogosBar
