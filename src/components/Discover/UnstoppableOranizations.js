import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'

import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const UnstoppableOrganizations = () => (
  <UnstoppableSection>

  </UnstoppableSection>
);

const UnstoppableSection = styled(Section)`
  background-color: #1c1d23;
  min-height: 500px;
`

export default UnstoppableOrganizations
