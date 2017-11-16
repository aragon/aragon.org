import React from 'react'
import styled from 'styled-components'
import { Section, Text, theme } from '@aragon/ui'

import tokens from './assets/tokens.png'
import background from './assets/background.svg'

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 200px;
`

const Main = styled(Section)`
  margin-top: calc(-200px - 235px);
  padding-top: 235px;
  background-image: url(${background});
  background-repeat: no-repeat
  background-position: 50% 0;
  background-size: cover;

  text-align: center;

  h1 {
    font-size: 32px;
    margin-bottom: 50px;
  }

  img {
    max-width: 750px;
    margin-bottom: -5px;
  }
`

const Tokens = () => (
  <Wrapper>
    <Main>
      <div>
        <Text heading="1" color={theme.gradientText}>Manage your tokens in a breeze</Text>
      </div>
      <img src={tokens} alt="" />
    </Main>
  </Wrapper>
)

export default Tokens
