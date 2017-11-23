import React from 'react'
import { IllustratedSection, styled, breakpoint } from '@aragon/ui'

import background from './assets/background.svg'

const OVERLAP_HEIGHT = 120

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const OverlapBackground = styled.div`
  position: relative;
  z-index: 1;
  pointer-events: none;
  margin-top: -${OVERLAP_HEIGHT}px;
  padding: ${OVERLAP_HEIGHT + 80}px 15px 50px;
  ${large(`
    padding-top: ${OVERLAP_HEIGHT + 120}px;
    &:after {
      background-size: cover;
    }
  `)};

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 30%;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #161817;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: 50% 0;
  }
`

export default OverlapBackground
