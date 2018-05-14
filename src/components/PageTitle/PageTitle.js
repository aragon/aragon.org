import React from 'react'
import styled, { css } from 'styled-components'
import { Text, theme, breakpoint } from '@aragon/ui'
import { Section } from '@aragon/web'

import background from './assets/background.svg'

const medium = css => breakpoint('medium', css)

const PageTitle = ({ title, subtitle, children }) => (
  <Main>
    <div>
      <h2 className="title">{title}</h2>
      <Text size="xlarge" className="subtitle">
        {subtitle}
      </Text>
      <div className="children">{children}</div>
    </div>
  </Main>
)

const Main = styled(Section)`
  padding: 40px 15px 0;
  text-align: center;
  background: url(${background}) no-repeat 50% -60px;
  padding-bottom: 120px;
  .title {
    margin-bottom: 25px;
    font-size: 30px;
    color: ${theme.textPrimary};
  }
  .subtitle {
    margin-bottom: 15px;
    color: ${theme.textSecondary};
    font-size: 20px;
  }
  .children {
    margin: 25px 0 0;
  }
  button,
  a {
    margin: 0 5px;
    text-decoration: none;
  }
  ${medium(css`
    padding-top: 100px;
    .title {
      font-size: 44px;
    }
    .subtitle {
      font-size: 24px;
    }
  `)};
`

export default PageTitle
