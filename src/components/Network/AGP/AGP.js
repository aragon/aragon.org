import React from 'react'
import { styled, breakpoint, Section, Button, theme } from '@aragon/ui'

import { SectionTitle, Anchor } from '../..'

import repos from './assets/agp.png'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled(Section)`
  padding: 50px 15px;

  .title {
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: 25px;
    color: ${theme.textPrimary};
    text-align: center;
  }
  .subtitle {
    margin-bottom: 15px;
    font-size: 25px;
    color: ${theme.textSecondary};
  }

  .image {
    text-align: center;
  }
  img {
    max-width: 100%;
    border-radius: 5px;
  }

  p {
    font-size: 17px;
    margin-bottom: 1em;
    color: ${theme.textSecondary};
  }
  .cta {
    text-align: center;
    margin-top: 30px;
  }

  ${medium(`
    padding-top: 120px;
    padding-bottom: 120px;
    .title {
      margin: 0 10%;
    }
    p {
      font-size: 18px;
    }
    .columns {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin: 50px 0;
    }
    .image img {
      max-width: 75%;
    }
    .item {
      width: 50%;
    }
    .item:nth-child(1) {
      padding-right: 10px;
    }
    .item:nth-child(2) {
      padding-left: 10px;
    }
    .cta {
      margin-top: 50px;
    }
  `)};

  ${large(`
    .title {
      font-size: 37px;
    }
  `)};
`

const AGP = () => (
  <Main>
    <div>
      <SectionTitle title="Aragon Governance Proposals" />
      <h1 className="title">
        Join us in improving Aragon by making your voice heard
      </h1>
      <div className="columns">
        <p className="item">
          Aragon Governance Proposals is a system for community members to join
          the discussion and create proposals affecting Aragon
        </p>
        <p className="item">
          Everyone is welcome to join in and aid in forging the future of how
          Aragon will shape out to be. Together we can build the exciting future
          which we want
        </p>
      </div>
      <div className="image">
        <img src={repos} alt="" />
      </div>
      <div className="cta">
        <Anchor
          mode="strong"
          href="https://github.com/aragon/governance/issues"
        >
          Dive into governance proposals
        </Anchor>
      </div>
    </div>
  </Main>
)

export default AGP
