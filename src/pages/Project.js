import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Project/About'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import Association from '../components/Project/Association'
import backgroundImage from '../components/Project/assets/hero-background.png'
import Section from '../components/General/Section'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Project = () => (
  <Page path="/project">
    <SecondaryNavbar/>
    <HeroSection>
      <Box>
        <Container>
          <h2>Fight for freedom</h2>
          <h4>Aragon is a project to empower freedom by creating tools for decentralized organizations to thrive.</h4>
          <Button.Anchor className="hero-link" mode="strong" href="https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/" target="_blank">Manifesto</Button.Anchor>
        </Container>
        <Container>
          <iframe src="https://www.youtube-nocookie.com/embed/AqjIWmiAidw?rel=0&amp;ecver=2" frameBorder="0" allow="autoplay; encrypted-media"  allowFullScreen></iframe>
        </Container>
      </Box>
    </HeroSection>
    <About/>
    <Association />
  </Page>
)

const HeroSection = styled(Section)`
  height: auto;
  ${medium('height: 550px;')};
  background: #faf7ec;
  background-image: url(${backgroundImage});
  padding-top: 99px;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
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
  h2, h4 {
    text-align: left;
  }
  h2 {
    margin-top: 0;
  }
  iframe {
    width: 90%;
    margin: 30px 0;
    border-radius: 21px;
    height: 238px;
    ${medium('margin: 0; margin-left: 10%;')};
  }
`;


export default Project
