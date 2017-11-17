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
  padding-top: 100px;
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
        <p>Rock-solid, automatic accounting.</p>
      </Subtitle>
      <Emphasis>
        <p>
          Every transaction that involves currency is registered forever.
        </p>
      </Emphasis>
      <Content>
        <ul>
          <li>
            Running Aragon on a public blockchain, this creates an unprecedented level of transparency.
          </li>
          <li>
            Budgeting each quarter and dividend sharing with stockholders happens automatically, following pre-established rules.
          </li>
        </ul>
      </Content>
    </Main>
    <MainWithLessMargin>
      <Title>
        <h1>Payments</h1>
      </Title>
      <Subtitle>
        <p>Pay anyone in the world with just 2 clicks.</p>
      </Subtitle>
      <Emphasis>
        <p>
        Money arrives in less than a minute.
        </p>
      </Emphasis>
      <Content>
        <p>Adding a new employee to your payroll is as easy as creating a recurring payment.</p>
      </Content>
      <Illustration>
        <img src={payment} alt="" />
      </Illustration>
    </MainWithLessMargin>
  </div>
)

export default Finance
