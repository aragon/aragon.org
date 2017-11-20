import React from 'react'
import styled from 'styled-components'
import { IllustratedSection, theme } from '@aragon/ui'

import finance from './assets/finance.png'
import payment from './assets/payment.png'
import check from './assets/check.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Main = styled(IllustratedSection)`
  background: #fff;

  ul {
    list-style-image: url(${check});
    padding-left: 25px;
  }

  li {
    color: ${theme.textSecondary};
    margin-bottom: 10px;
  }

  img {
    border: 1px solid #DBEBEA;
    border-radius: 5px;
  }

  section {
    padding: none;
  }
`

const MainWithLessMargin = styled(Main)`
  padding-top: 0px;
`

const Finance = () => (
  <div>
    <Main>
      <Illustration>
        <img src={finance} alt="" />
      </Illustration>
      <Title>
        <h1>Accounting</h1>
      </Title>
      <Subtitle>
        <p>Tamper-proof, effective accounting</p>
      </Subtitle>
      <Emphasis>
        <p>
          Every transaction is recorded and can be certified on the blockchain at any given time
        </p>
      </Emphasis>
      <Content>
        <ul>
          <li>
            Unprecedented level of transparency can be gained through the use of a public blockchain to engrave every entry permanently on the ledger
          </li>
          <li>
            Pre-established rules can automatically define your quarterly spending and budgeting
          </li>
        </ul>
      </Content>
    </Main>
    <MainWithLessMargin>
      <Title>
        <h1>Payments</h1>
      </Title>
      <Subtitle>
        <p>Send a payment to anyone with a few simple clicks</p>
      </Subtitle>
      <Emphasis>
        <p>
        Your payment will be delivered in under a minute to anywhere in the world
        </p>
      </Emphasis>
      <Content>
        <p>Adding an employee to your payroll is as easy as creating a new recurring payment</p>
      </Content>
      <Illustration>
        <img src={payment} alt="" />
      </Illustration>
    </MainWithLessMargin>
  </div>
)

export default Finance
