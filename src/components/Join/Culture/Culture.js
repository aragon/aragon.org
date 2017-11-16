import React from 'react'
import styled from 'styled-components'

import background from './assets/background.svg'

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 200px;
`

const Main = styled.div`
  margin-top: calc(-200px - 235px);
  padding-top: 235px;
  padding-bottom: 140px;
  background-image: url(${background});
  background-repeat: no-repeat
  background-position: 50% 0;
  background-size: cover;
`

const Culture = () => (
  <Wrapper>
    <Main>
      <div>bla</div>
    </Main>
  </Wrapper>
)

export default Culture
