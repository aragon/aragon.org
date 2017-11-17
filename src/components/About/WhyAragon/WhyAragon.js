import React from 'react'
import styled from 'styled-components'
import { IllustratedSection, themeDark } from '@aragon/ui'

import illustration from './assets/illustration.svg'
import background from './assets/background.svg'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 200px;
`

const Main = styled(IllustratedSection)`
  margin-top: calc(-200px - 235px);
  padding-top: 235px;
  padding-bottom: 140px;
  background-image: url(${background});
  background-repeat: no-repeat
  background-position: 50% 0;
  background-size: cover;
`

const WhyAragon = () => (
  <Wrapper>
    <Main>
      <Subtitle dark>
        <p>Why Aragon?</p>
      </Subtitle>
      <Content dark>
        <p>
        Organizations and companies exist in order to create value by using resources to create products or provide services.
        </p>
        <p>
        However, intermediaries and third parties such as governments decrease the output of those organizations by imposing restrictions and creating complex regulatory frameworks.
        </p>
      </Content>
      <Emphasis dark>
        <p>
          Aragon was born to disintermediate the creation and maintenance of companies and other organizational structures.
        </p>
      </Emphasis>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default WhyAragon
