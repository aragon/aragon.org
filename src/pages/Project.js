import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Project/About'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import Association from '../components/Project/Association'
import backgroundImage from '../components/Project/assets/project-cover.svg'
import Section from '../components/General/Section'
import VideoModal from '../components/General/VideoModal'
import videothumbnail from '../components/Project/assets/project-video.png'

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
      <Page path="/project" color="black">
        <HeroSection>
          <Box>
            <Container>
              <h2>Fight for freedom</h2>
              <h4>Aragon is a project to empower freedom by creating tools for decentralized organizations to thrive.</h4>
              <div className="hero-button-container centered">
                <a className="principal-button" href="https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/"
                  target="_blank">
                  Manifesto
                </a>
              </div>
            </Container>
          </Box>
        </HeroSection>
        <SecondaryNavbar/>
        <VideoContainer>
          <img src={videothumbnail} onClick={this.handleOpen}/>
          <VideoModal ref={this.videoModal} videoId="AqjIWmiAidw"/>
        </VideoContainer>
        <About/>
        <Association />
      </Page>
    )
  }
}

const VideoContainer = styled.div`
  text-align: center;
  img {
    max-width: 1100px;
    margin: 40px auto 50px auto;
    ${medium('margin: 40px auto 100px auto;')};
    width: 95%;
  }
`

const HeroSection = styled(Section)`
  height: auto;
  ${medium('height: 550px;')};
  background: #faf7ec;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 94px;
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
  text-align: center;
  h2 {
    margin-top: 0;
    color: #212B36;
  }
  h4 {
    color: #6D7693;
    max-width: 663px;
    margin: auto;
  }
`;


export default Project
