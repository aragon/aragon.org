import React from 'react'
import { styled } from '@aragon/ui'
import { breakpoint, Section, Button, theme } from '@aragon/ui'

import { SectionTitle, Anchor } from '../../'

import bsod from './assets/bsod.png'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled(Section)`
  padding: 50px 15px;
  background: #fcfcff;
  .title {
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: 25px;
    color: ${theme.textPrimary};
    text-align: center;
    padding: 0 10%;
  }

  img {
    max-width: calc(100% - 30px);
  }
  p {
    font-size: 17px;
    margin-bottom: 1em;
    color: ${theme.textSecondary};
  }
  .cta {
    text-align: center;
    margin-top: 50px;
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
    .cta a {
      margin: 0 0.5rem;
    }
  `)};

  ${large(`
    .title {
      font-size: 37px;
    }
  `)};
`

const Docs = () => (
  <Main>
    <div>
      <SectionTitle title="Getting started" />
      <h1 className="title">
        The aragonOS architecture
      </h1>
      <img src="https://raw.githubusercontent.com/aragon/aragon-wiki/master/docs/images/aragonos/aragon_tech_lead_wants_to_transfer_100_eth_to_payroll_contract.gif" alt="" />
      <div className="columns">
        <p className="item">
          Once you understand the robustness of the architecture and the Access Control List
          that powers aragonOS, your vision for smart contract development
          will change radically
        </p>
        <p className="item">
          aragonOS-based apps follow the UNIX philosophy to do one simple thing exceedingly well.
          They expose permissions for other apps to consume their functionality and build upon them
        </p>
      </div>
      <div className="cta">
        <Anchor mode="strong" href="https://blog.aragon.one/introducing-aragonos-3-0-alpha-the-new-operating-system-for-protocols-and-dapps-348f7ac92cff" target="_blank">Announcement post</Anchor>
        <Anchor mode="outline" href="http://wiki.aragon.one/dev/aragonOS_index/" target="_blank">Architecture overview</Anchor>
      </div>
    </div>
  </Main>
)

export default Docs
