import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Project/About'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import Association from '../components/Project/Association'
import backgroundImage from '../components/Project/assets/hero-background.png'
import Section from '../components/General/Section'
import VideoModal from '../components/General/VideoModal'
import videothumbnail from '../components/Project/assets/videothumbnail.png'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.videoModal = React.createRef();
    this.handleOpen = this.handleOpen.bind(this);
    if (typeof window !== `undefined`) {
      window.YTConfig = {
        host: 'https://www.youtube.com'
      }
    }
  }

  handleOpen() {
    this.videoModal.current.handleOpen();
  }


  render() {
    return(
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
              <BreakPoint to="medium">
                <a target="_blank" href="https://www.youtube.com/watch?v=AqjIWmiAidw"><img src={videothumbnail}/></a>
              </BreakPoint>
              <BreakPoint from="medium">
                <img src={videothumbnail} onClick={this.handleOpen}/>
                <VideoModal ref={this.videoModal} videoId="AqjIWmiAidw"/>
              </BreakPoint>
            </Container>
          </Box>
        </HeroSection>
        <About/>
        <Association />
      </Page>
    )
  }
}

const HeroSection = styled(Section)`
  height: auto;
  ${medium('height: 550px;')};
  background: #faf7ec;
  background-image: url(${backgroundImage});
  padding-top: 64px;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  img {
    cursor: pointer;
    ${medium('margin-left: 20px;')};
  }
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
`;


export default Project
