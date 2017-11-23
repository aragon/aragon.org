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

const WhyAragon = () => (
  <Wrapper>
    <Main>
      <Subtitle dark>
        <p>Why Aragon?</p>
      </Subtitle>
      <Content dark>
        <p>
        Organizations like companies exist to create value for their owners and users.
        They use the resources available to them in order to provide services and to create products
        </p>
        <p>
        Their ability to do this efficiently is hindered by factors outside of their influence.
        By removing unnecessary intermediaries and third parties that impose artificial restrictions and unnecessarily complex regulations, we can modernize the way organizations are run
        </p>
      </Content>
      <Emphasis dark>
        <p>
          Aragon was born to bring transparency and independent governance to the forefront of managing an organization.
          We want to give the users the freedom they deserve to run their lives
        </p>
      </Emphasis>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default WhyAragon
