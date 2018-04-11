import React from 'react'
import styled, { css } from 'styled-components'
import { Text, font, theme, breakpoint } from '@aragon/ui'
import { Section } from '@aragon/web'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import tokens from './assets/tokens.png'

const medium = css => breakpoint('medium', css)

const Main = styled(Section)`
  text-align: center;

  h1 {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 50px;
  }
  img {
    max-width: calc(100% - 30px);
    margin-bottom: -5px;
  }
  ${medium(`
    font-size: 37px;
    img {
      max-width: 750px;
    }
  `)};
`

const Tokens = () => (
  <OverlapBackground>
    <Main>
      <div>
        <h1>
          <Text color={theme.gradientText} size='auto'>
            Managing your organization has never been easier
          </Text>
        </h1>
      </div>
      <img src={tokens} alt="" />
    </Main>
  </OverlapBackground>
)

export default Tokens
