import React from 'react'
import { styled } from '@aragon/ui'
import { breakpoint, Section, Button, theme } from '@aragon/ui'

import { SectionTitle, Anchor } from '../../'

import bsod from './assets/bsod.png'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled(Section)`
  padding: 50px 15px;
  background: #fff;
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
        Check out development resources
      </h1>
      <img src={bsod} alt="" />
      <div className="columns">
        <p className="item">
          Best starting point is the 
        </p>
        <p className="item">
          The Aragon Foundation will introduce a way for
          participants to join and submit their concepts for deliberation
          and be accepted into Aragon Nest.
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
