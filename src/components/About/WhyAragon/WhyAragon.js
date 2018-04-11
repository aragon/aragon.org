import React from 'react'
import styled from 'styled-components'
import { IllustratedSection } from '@aragon/web'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import illustration from './assets/illustration.svg'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection

const StyledOverlapBackground = styled(OverlapBackground)`
  padding-top: 80px;
`

const WhyAragon = () => (
  <StyledOverlapBackground>
    <IllustratedSection>
      <Subtitle dark>
        <p>Why Aragon?</p>
      </Subtitle>
      <Content dark>
        <p>
          Organizations like companies exist to create value for their owners
          and users. They use the resources available to them in order to
          provide services and to create products
        </p>
        <p>
          Their ability to do this efficiently is hindered by factors outside of
          their influence. By removing unnecessary intermediaries and third
          parties that impose artificial restrictions and unnecessarily complex
          regulations, we can modernize the way organizations are run
        </p>
      </Content>
      <Emphasis dark>
        <p>
          Aragon was born to bring transparency and independent governance to
          the forefront of managing an organization. We want to give the users
          the freedom they deserve to run their lives
        </p>
      </Emphasis>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </IllustratedSection>
  </StyledOverlapBackground>
)

export default WhyAragon
