import React from 'react'
import { styled } from '@aragon/ui'
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

const Intro = () => (
  <Wrapper>
    <Main>
      <Subtitle dark>
        <p>Putting the power back into the hands of the users</p>
      </Subtitle>
      <Emphasis dark>
        <p>
          The Aragon Network will decentralize its governance by gradually handing over control of the project to the users
        </p>
      </Emphasis>
      <Content dark>
        <p>
          The Aragon Network will establish additional services for the organizations taking advantage of what Aragon Core provides
        </p>
        <p>
          Our mission is to make the Aragon Network an autonomous organization itself, which is managed by the people using it for their mutual prosperity
        </p>
      </Content>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default Intro
