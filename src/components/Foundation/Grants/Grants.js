import React from 'react'
import styled from 'styled-components'
import { Section, Button, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle.js'

import repos from './assets/repos.png'

const Main = styled(Section)`
  padding-top: 128px;
  padding-bottom: 128px;
  background: #fff;
  .title {
    margin-bottom: 25px;
    font-size: 36px;
    color: ${theme.textPrimary};
    text-align: center;
    padding: 0 10%;
  }
  .subtitle {
    margin-bottom: 15px;
    font-size: 24px;
    color: ${theme.textSecondary};
  }

  img {
    max-width: 100%;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }
  .columns > p {
    width: 50%;
  }
  .columns > p:nth-child(1) {
    padding-right: 7.5px;
  }
  .columns > p:nth-child(2) {
    padding-left: 7.5px;
  }

  p {
    font-size: 18px;
    color: ${theme.textSecondary};
  }

  .cta {
    text-align: center;
    margin-top: 50px;
  }
`

const Grants = () => (
  <Main>
    <div>
      <SectionTitle title="Grants program" />
      <h1 className="title">Let's create the best tooling for the decentralized web, together</h1>
      <img src={repos} alt="" />
      <div className="columns">
        <p>
          Let's create the best tooling for the decentralized web, together. Let's create the best tooling for the decentralized web, together.
        </p>
        <p>
          Let's create the best tooling for the decentralized web, together. Let's create the best tooling for the decentralized web, together.
        </p>
      </div>
      <div className="cta">
        <Button mode="strong">Apply now</Button>
      </div>
    </div>
  </Main>
)

export default Grants
