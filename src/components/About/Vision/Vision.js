import React from 'react'
import styled from 'styled-components'
import { breakpoint, theme } from '@aragon/ui'
import { Section } from '@aragon/web'

import SectionTitle from '../../SectionTitle.js'

import drawing0 from './assets/0.jpg'
import drawing1 from './assets/1.jpg'
import drawing2 from './assets/2.jpg'

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
  .columns {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img.item {
    max-width: 100%;
    margin-bottom: 30px;
  }
  p {
    margin-top: 20px;
    font-size: 18px;
    color: ${theme.textSecondary};
  }

  ${medium(`
    padding: 120px 15px 80px;
    .columns {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      margin: 40px 0;
    }
    img.item {
      width: 33%;
      margin-bottom: 0;
    }
    p.item {
      width: 50%;
    }
    p.item:nth-child(1) {
      padding-right: 7.5px;
    }
    p.item:nth-child(2) {
      padding-left: 7.5px;
    }
  `)};

  ${large(`
    .title {
      font-size: 37px;
    }
  `)};
`

const Vision = () => (
  <Main>
    <div>
      <SectionTitle title="Our vision" />
      <h1 className="title">
        Evolution of the internet and blockchain technology are changing the
        ways we interact with each other
      </h1>
      <div className="columns">
        <img className="item" src={drawing0} alt="" />
        <img className="item" src={drawing1} alt="" />
        <img className="item" src={drawing2} alt="" />
      </div>
      <div className="columns">
        <p className="item">
          We believe that the progression of modern technology solutions, such
          as the invention of the blockchain, are changing the incentives for
          people to interact with each other. We are building the tools for the
          next generation of organizations to take advantage of this revolution
        </p>
        <p className="item">
          Experimenting with new governance models has been a very risky
          endeavour during previous iterations of society. Now, for the first
          time in human history, we can let a thousand new governance models
          emerge, all from the comfort of our laptops
        </p>
      </div>
    </div>
  </Main>
)

export default Vision
