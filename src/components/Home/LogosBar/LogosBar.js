import React from 'react'
import styled from 'styled-components'
import { Section } from '@aragon/web'

import economist from './assets/economist.svg'
import coindesk from './assets/coindesk.svg'
import forbes from './assets/forbes.svg'
import nasdaq from './assets/nasdaq.svg'
import reuters from './assets/reuters.svg'
import venturebeat from './assets/venturebeat.svg'

const LOGOS = [
  {
    name: 'CoinDesk',
    image: coindesk,
    url: 'https://www.coindesk.com/dao-manager-aragon-alpha-ethereum/',
    opacity: 0.5,
  },
  {
    name: 'The Economist',
    image: economist,
    url:
      'https://www.economist.com/news/world-if/21724906-trust-business-little-noticed-huge-startups-deploying-blockchain-technology-threaten',
    opacity: 0.75,
  },
  {
    name: 'VentureBeat',
    image: venturebeat,
    url:
      'https://venturebeat.com/2017/12/03/no-ceo-needed-these-blockchain-platforms-will-let-the-crowd-run-startups/',
    opacity: 0.5,
  },
  {
    name: 'Forbes',
    image: forbes,
    url:
      'https://www.forbes.com/sites/rogeraitken/2017/04/20/forbes-under-30-tech-prodigy-in-cryptosale-for-decentralized-jurisdiction-platform/',
    opacity: 0.75,
    width: 92,
  },
  {
    name: 'Reuters',
    image: reuters,
    url:
      'https://www.reuters.com/article/us-aragon-blockchain-funding/blockchain-token-sale-nets-25-million-in-under-15-minutes-idUSKCN18E32X',
    opacity: 0.75,
  },
  {
    name: 'Nasdaq',
    image: nasdaq,
    url:
      'http://www.nasdaq.com/article/disintermediating-entrepreneurship-iis-the-first-step-towards-a-fairer-world-cm806430',
    opacity: 0.5,
  },
]

const Main = styled(Section)`
  padding: 30px 0;
  background: #fff;
  .title {
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    margin-bottom: 10px;
  }
  .logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    align-items: center;
  }
  a {
    mix-blend-mode: multiply;
    margin: 10px 20px;
  }
  a:first-child {
    margin-left: 0;
  }
  a:first-child {
    margin-right: 0;
  }
  img {
    max-height: 64px;
    filter: grayscale(100%);
    transition: filter 150ms ease-in-out;
  }
  a:hover img {
    filter: none;
  }
`

const LogosBar = () => (
  <Main>
    <h1 className="title">As seen on</h1>
    <div className="logos">
      {LOGOS.map(({ name, image, url, opacity, width = 128 }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ opacity }}
        >
          <img src={image} alt={name} title={name} width={width} />
        </a>
      ))}
    </div>
  </Main>
)

export default LogosBar
