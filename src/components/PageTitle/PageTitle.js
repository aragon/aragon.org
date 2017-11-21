import React from 'react'
import { styled } from '@aragon/ui'
import { Section, Text, theme } from '@aragon/ui'

import background from './assets/background.svg'

const StyledContainer = styled(Section)`
  padding-top: 100px;
  text-align: center;
  background: url(${background}) no-repeat 50% -60px;
  .title {
    margin-bottom: 25px;
    font-size: 58px;
    color: ${theme.textPrimary};
  }
  .subtitle {
    margin-bottom: 15px;
    color: ${theme.textSecondary};
  }

  .children {
    padding-bottom: 164px;
    margin: 25px 0;
  }

  button, a {
    margin: 0 5px;
    text-decoration: none;
  }

  span {
    display: block;
    padding-bottom: 192px;
  }
`

const PageTitle = ({ title, subtitle, children }) => (
  <StyledContainer>
    <div>
      <h2 className="title">{title}</h2>
      <Text size="xlarge" className="subtitle">
        {subtitle}
      </Text>
      {children ?
        <div className="children">
          {children}
        </div> :
        <span />}
    </div>
  </StyledContainer>
)

export default PageTitle
