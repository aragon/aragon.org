import React from 'react'
import styled from 'styled-components'
import Section from '../General/Section'
import backgroundImage from './home-assets/fight-background.svg'
import { Link } from 'react-static'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)


const Fight = () => (
    <HeroSection>
      <Box>
        <Container>
          <div className="h2-box">
            <h2>Fight for freedom day</h2>
          </div>
        </Container>
      </Box>
    </HeroSection>
)

const HeroSection = styled(Section)`
  background-color: #1c1d23;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: calc(50% - 50px) 100%;
  min-height: 600px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 100%;
  .h2-box {
    display: flex;
    justify-content: center;
  }
  h2{
    text-align: center;
    margin: 0;
    font-size: 70px;
    line-height: 1.5;
    background: -webkit-linear-gradient(left, #2CF4E1, #2CB2E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }
`;
export default Fight
