import React from 'react'
import styled from 'styled-components'
import { breakpoint, Button, theme } from '@aragon/ui'
import { Section } from '@aragon/web'

import { SectionTitle, Anchor } from '../../'

import repos from './assets/repos.png'

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

const Grants = () => (
  <Main>
    <div>
      <SectionTitle title="Grants program" />
      <h1 className="title">
        Let's build the best tools for the future, together
      </h1>
      <img src={repos} alt="" />
      <div className="columns">
        <p className="item">
          The Aragon Nest program was created to support great teams in the
          research and development of all-important tools for the Aragon and
          Ethereum ecosystems
        </p>
        <p className="item">
          You can propose subjects for grants that we should award, or you can
          apply for a grant from Nest to your project. The process is completely
          transparent for the community
        </p>
      </div>
      <div className="cta">
        <Anchor
          mode="strong"
          href="https://github.com/aragon/nest"
          target="_blank"
        >
          Check out proposals
        </Anchor>
        <Anchor
          mode="outline"
          href="https://blog.aragon.one/launch-of-aragon-nest-8d42d1a37595"
          target="_blank"
        >
          Read more
        </Anchor>
      </div>
    </div>
  </Main>
)

export default Grants
