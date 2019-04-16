import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import backgroundImage from './assets/video-background.png';
import play from './assets/play.svg';
import Zoom from 'react-reveal/Zoom';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    let show = this.state.modal;
    let self = this;
    var element = document.getElementById('modalContent');
    var modalBackground = document.getElementById('videoModal');
    modalBackground.classList.add('background-out');
    element.style.removeProperty('animation-name');
    element.classList.add('content-out');
    setTimeout(function() {
      self.setState({modal: !show});
    }, 500);
  }

  handleOpen() {
    var modalBackground = document.getElementById('videoModal');
    modalBackground.classList.add('display-block');
    let show = this.state.modal;
    this.setState({modal: !show});
  }

  render() {
    return (
      <VideoeSection>
        <Box>
          <Container>
            <h2>Learn about the story behind Aragon Bella</h2>
            <BreakPoint to="medium">
            <a target="blank" href="https://www.youtube.com/watch?v=AqjIWmiAidw">
              <h4>
                <img src={play} />
                Watch the video now
              </h4>
            </a>
            </BreakPoint>
            <BreakPoint from="medium">
              <h4 onClick={this.handleOpen}>
                <img src={play} />
                Watch the video now
              </h4>
            </BreakPoint>
          </Container>
        </Box>
        <BreakPoint from="medium">
          <Modal
            id="videoModal"
            className={this.state.modal ? 'display-block background-in' : 'background-out'}
            onClick={this.handleClose}>
            <Zoom duration={500} spy={this.state.modal}>
              <div
                id="modalContent"
                className={
                  this.state.modal ? 'modal-content' : 'modal-content content-out'
                }>
                <iframe
                  id="youtubeVideo"
                  src="https://www.youtube-nocookie.com/embed/AqjIWmiAidw?rel=0&amp;ecver=2"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </Zoom>
          </Modal>
        </BreakPoint>
      </VideoeSection>
    );
  }
}
const VideoeSection = styled(Section)`
  background-color: #1c1d23;
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
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
  text-align: center;
  margin: auto;
  ${medium('text-align: left; margin: inherit;')};
  h2 {
    font-size: 56px;
    line-height: 1.2;
    text-align: center;
    color: #ffffff;
    margin-bottom: 15px;
  }
  h4 {
    font-size: 22px;
    line-height: 44px;
    text-align: center;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      padding-right: 7px;
    }
  }
`;
const Image = styled.img`
  max-width: 100%;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 6;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: none;
  padding:44px;

  &.display-block {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes backgroundInAnimation {
    0% {
      background-color: rgba(0, 0, 0, 0);
      opacity: 0;
    }
    50% {
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 0.5;
    }
    100% {
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 1;
    }
  }
  &.background-in {
    animation: backgroundInAnimation 0.5s linear;
    background-color: rgba(0, 0, 0, 0.8);
  }
  @keyframes contentOutAnimation {
    0% {
      transform: scale(1, 1);
      opacity: 1;
    }
    50% {
      transform: scale(0.5, 0.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(0, 0);
      opacity: 0;
    }
  }
  .content-out {
    animation: contentOutAnimation 0.5s linear;
    opacity: 1;
  }
  &.background-out {
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    transition: all 0.5s linear;
  }
  .modal-content {
    margin-top: 64px;
    background-color: black;
    margin: 15% auto;
    border: 1px solid black;
    width: 60%;
    height: auto;
    iframe {
      width: 100%;
      height: 30vw;
    }
  }
`;

export default Video;
