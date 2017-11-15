import React from 'react'
import styled from 'styled-components'
import { Section, Text, theme } from '@aragon/ui'

import background from './assets/background.svg'

const StyledContainer = styled(Section)`
  padding-top: 100px;
  padding-bottom: 256px;
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
`

const PageTitle = ({ title, subtitle }) => {
  return (
    <StyledContainer>
      <div>
        <h2 className="title">{title}</h2>
        <Text size="xlarge" className="subtitle">
          {subtitle}
        </Text>
      </div>
    </StyledContainer>
  )
}

export default PageTitle
