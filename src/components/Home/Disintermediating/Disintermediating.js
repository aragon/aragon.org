import React from 'react'
import styled from 'styled-components'
import { themeDark } from '@aragon/ui'
import { IllustratedSection } from '@aragon/web'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import illustration from './assets/illustration.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Main = styled(IllustratedSection)`
  padding-top: 0;
  padding-bottom: 140px;
`

const Disintermediating = () => (
  <OverlapBackground>
    <Main>
      <Title>
        <h1>Democratizing governance</h1>
      </Title>
      <Subtitle dark>
        <p>The first step towards a more fair, efficient world</p>
      </Subtitle>
      <Emphasis dark>
        <p>
          We are building Aragon because we believe{' '}
          <a
            href="https://blog.aragon.one/decentralized-organizations-can-solve-the-worlds-worst-problems-840db6255d12"
            target="_blank"
            rel="noopener noreferrer"
          >
            decentralized organizations can solve the world’s worst problems
          </a>
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
  </OverlapBackground>
)

export default Disintermediating
