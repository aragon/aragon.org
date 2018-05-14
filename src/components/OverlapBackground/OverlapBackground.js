import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
import { IllustratedSection } from '@aragon/web'

import background from './assets/background.svg'
import leftRepeat from './assets/left-repeat.svg'
import rightRepeat from './assets/right-repeat.svg'

const BG_WIDTH = 1440
const BG_HEIGHT = 792
const OVERLAP_HEIGHT = 120

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled.div`
  position: relative;
  z-index: 1;
  pointer-events: none;
  margin-top: -${OVERLAP_HEIGHT}px;
  padding: ${OVERLAP_HEIGHT + 80}px 15px 50px;

  ${large(`
    padding-top: ${OVERLAP_HEIGHT + 120}px;
  `)};

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: ${BG_HEIGHT}px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #161817;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${background}) no-repeat 50% 0;
  }
`

const Left = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: calc(50% + ${BG_WIDTH / 2}px);
  background: url(${leftRepeat}) repeat-x 0 0;
`

const Right = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: calc(50% + ${BG_WIDTH / 2}px);
  background: url(${rightRepeat}) repeat-x 0 0;
`

const Content = styled.div`
  pointer-events: auto;
`

const OverlapBackground = ({ children, ...props }) => (
  <Main {...props}>
    <Left />
    <Content>{children}</Content>
    <Right />
  </Main>
)

export default OverlapBackground
