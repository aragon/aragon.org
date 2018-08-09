import React from 'react'
import styled from 'styled-components'
import { Text, theme } from '@aragon/ui'

const StyledSectionTitle = styled.div`
  h1 {
    font-size: 28px;
    text-align: center;
    font-weight: 600;
  }
`

const SectionTitle = ({ title, className }) => (
  <StyledSectionTitle>
    <h1>
      <Text smallcaps color={theme.accent} className={className}>
        {title}
      </Text>
    </h1>
  </StyledSectionTitle>
)

export default SectionTitle
