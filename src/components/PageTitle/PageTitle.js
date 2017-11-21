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

  button {
    margin: 25px 5px;
    margin-bottom: 164px;
  }

  span {
    display: block;
    padding-bottom: 256px;
  }
`

const PageTitle = ({ title, subtitle, children }) => (
  <StyledContainer>
    <div>
      <h2 className="title">{title}</h2>
      <Text size="xlarge" className="subtitle">
        {subtitle}
      </Text>
      {children}
      {!children ? <span /> : null}
    </div>
  </StyledContainer>
)

export default PageTitle
