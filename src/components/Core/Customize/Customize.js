import React from 'react'
import { styled, Section, Text, themeDark, breakpoint } from '@aragon/ui'

import permission from './assets/permission.png'
import settings from './assets/settings.svg'
import path from './assets/path.svg'
import code from './assets/code.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled(Section)`
  background-image: linear-gradient(39deg, #0b0b0a, #464f51);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 15px;
  h1 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 50px;
  }
  .screen {
    max-width: 750px;
    width: 100%;
  }
  .columns {
    padding-top: 10px;
    max-width: 420px;
  }
  .item {
    margin-top: 40px;
  }
  .item p {
    font-size: 16px;
    color: ${themeDark.textSecondary};
    margin-top: 25px;
  }

  ${medium(`
    padding-top: 120px;
    padding-bottom: 90px;
    h1 {
      font-size: 37px;
    }
    .item p {
      font-size: 18px;
    }
    .columns {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      max-width: none;
      padding-top: 70px;
    }
    .item {
      width: 33%;
      text-align: left;
      margin-left: 30px;
    }
    .item:first-child {
      margin-left: 0;
    }
  `)};
  ${large(`
    padding-bottom: 120px;
    .columns {
      padding-top: 60px;
    }
    .item {
      margin-left: 80px;
    }
  `)};
`

const Customize = () => (
  <Main>
    <Content>
      <div>
        <Text heading="1" color={themeDark.textPrimary}>
          It's your organization. Make it work for you
        </Text>
      </div>
      <img className="screen" src={permission} alt="" />
      <div className="columns">
        <div className="item">
          <img src={settings} alt="" />
          <p>
            Aragon organizations are powered by the AragonOS and fully
            customizable to fit your needs
          </p>
        </div>
        <div className="item">
          <img src={path} alt="" />
          <p>
            You set the rules of how and when actions are prompted and enacted
          </p>
        </div>
        <div className="item">
          <img src={code} alt="" />
          <p>
            Code is open source. As a developer you can even modify it to match
            your specific use case
          </p>
        </div>
      </div>
    </Content>
  </Main>
)

export default Customize
