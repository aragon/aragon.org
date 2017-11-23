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
        <p>Heart of the early development</p>
      </Subtitle>
      <Content dark>
        <p>
          The Aragon Foundation is a non-profit organization which was created to nurture the project in it's early phases
        </p>
        <p>
          Developing the platform and project towards maturity is the main duty of the Foundation. Other activities include motivating external developers to build more functionality and applications on Aragon to boost adoption of the technology
        </p>
      </Content>
      <Emphasis dark>
        <p>
          The Aragon Foundation is laying down the first bricks on the road to what will become
        </p>
      </Emphasis>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default WhyAragon
