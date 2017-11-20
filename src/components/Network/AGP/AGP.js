import React from 'react'
import styled from 'styled-components'
import { Section, Button, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle.js'

import repos from './assets/agp.png'

const Main = styled(Section)`
  padding-top: 128px;
  padding-bottom: 128px;

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

  .image {
    text-align: center;
  }

  img {
    max-width: 75%;
    border-radius: 5px;
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

const AGP = () => (
  <Main>
    <div>
      <SectionTitle title="Aragon Governance Proposals" />
      <h1 className="title">Join us in creating an even better Aragon by making your voice heard</h1>
      <div className="columns">
        <p>
          Aragon Governance Proposals is a system for community members to join the discussion and create proposals affecting Aragon
        </p>
        <p>
          Everyone is welcome to join in and aid in forging the future of how Aragon will shape out to be. Together we can build the exciting future which we want
        </p>
      </div>
      <div className="image"><img src={repos} alt="" /></div>
      <div className="cta">
        <Button mode="strong">Dive into governance proposals</Button>
      </div>
    </div>
  </Main>
)

export default AGP
