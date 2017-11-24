import React from 'react'
import { styled, IllustratedSection, theme, breakpoint } from '@aragon/ui'

import finance from './assets/finance.png'
import sign from './assets/sign.png'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Main = styled(IllustratedSection)`
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fff;
  img {
    border: 1px solid #dbebea;
    border-radius: 3px;
  }
  ${breakpoint('large', `
    padding-top: 120px;
    padding-bottom: 120px;
  `)};
`

const MainWithLessMargin = styled(Main)`
  padding-top: 0px;
  ${breakpoint('large', `
    margin-top: -50px;
  `)};
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
          Every transaction is recorded and can be verified on the blockchain at
          any given time
        </p>
      </Emphasis>
      <Content>
        <p>
          Unprecedented level of transparency can be gained through the use of a
          public blockchain to engrave every entry permanently on the ledger
        </p>
        <p>
          Pre-established rules can automatically define your quarterly spending
          and budgeting
        </p>
      </Content>
    </Main>
    <MainWithLessMargin>
      <Title>
        <h1>Permissions</h1>
      </Title>
      <Subtitle>
        <p>Flexible and resilient privilege escalation</p>
      </Subtitle>
      <Emphasis>
        <p>
          Fine-grained permissions deliver the freedom for you to create an
          organization that will work for you
        </p>
      </Emphasis>
      <Content>
        <p>
          Permissions can be granular and assigned in fine detail. You can
          choose to give people a certain degree of control over the
          organization and the privileges can be escalated easily if the person
          isn't allowed to perform a desired action
        </p>
        <p>
          By assigning different permissions to people, you can create the kind
          of organizational structure that is best suited for your needs
        </p>
      </Content>
      <Illustration>
        <img src={sign} alt="" />
      </Illustration>
    </MainWithLessMargin>
  </div>
)

export default Finance
