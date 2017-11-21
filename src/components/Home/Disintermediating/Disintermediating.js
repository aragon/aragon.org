import React from 'react'
import { styled } from '@aragon/ui'
import { IllustratedSection, themeDark } from '@aragon/ui'

import illustration from './assets/illustration.svg'
import background from './assets/background.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 200px;
`

const Main = styled(IllustratedSection)`
  margin-top: -500px;
  padding-top: 235px;
  padding-bottom: 140px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
`

const Disintermediating = () => (
  <Wrapper>
    <Main>
      <Title>
        <h1>Disintermediating business and transactions between humans</h1>
      </Title>
      <Subtitle dark>
        <p>The first step towards a more fair, efficient world</p>
      </Subtitle>
      <Emphasis dark>
        <p>
          We are building Aragon because we believe decentralized organizations
          can solve the world’s worst problems
        </p>
      </Emphasis>
      <Content dark>
        <p>
          Aragon is a project that aims to disintermediate the creation and
          maintenance of organizational structures by using blockchain
          technology. We want to empower people across the world to easily and
          securely manage their organizations. We provide the tools for anyone
          to become an entrepreneur and run their own organization, to take
          control of their own lives
        </p>
        <p>
          By making it possible for everyone in the world to organize, we are
          enabling a borderless, permissionless and more efficient creation of
          value
        </p>
      </Content>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default Disintermediating
