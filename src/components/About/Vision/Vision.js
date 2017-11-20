import React from 'react'
import styled from 'styled-components'
import { Section, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle.js'

import drawing0 from './assets/0.jpg'
import drawing1 from './assets/1.jpg'
import drawing2 from './assets/2.jpg'

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

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }
  .columns > img {
    width: 33%;
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
`

const Vision = () => (
  <Main>
    <div>
      <SectionTitle title="Our vision" />
      <h1 className="title">Evolution of the Internet and Blockchain technology are changing the ways we interact with each other</h1>
      <div className="columns">
        <img src={drawing0} alt="" />
        <img src={drawing1} alt="" />
        <img src={drawing2} alt="" />
      </div>
      <div className="columns">
        <p>
          We believe that the progression of modern technology solutions such as the invention of blockchain technology are changing the incentives for people to interact between each other. We are building the tools for the next generation of organizations to take advantage of this technological revolution
        </p>
        <p>
          The inception of Aragon was influenced by the work that Nobel Prize winner Ronald Coase and Yochai Benkler had put forth in their papers Nature of the Firm and Coase’s Penguin. Inspired by their efforts we came to the realization that virtual organizations are the path toward a brighter future
        </p>
      </div>
    </div>
  </Main>
)

export default Vision
