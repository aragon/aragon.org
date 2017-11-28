import React from 'react'
import { styled } from '@aragon/ui'

import { Text, theme } from '@aragon/ui'

const StyledSectionTitle = styled.div`
  h1 {
    font-size: 18px;
    text-align: center;
    font-weight: 600;
  }
`

const SectionTitle = ({ title, className }) => (
  <StyledSectionTitle>
    <Text heading={1} smallcaps color={theme.accent} className={className}>
      {title}
    </Text>
  </StyledSectionTitle>
)

export default SectionTitle
