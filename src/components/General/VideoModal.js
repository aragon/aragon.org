import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import YouTube from 'react-youtube';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      player: null,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  handleClose() {
    let show = this.state.modal;
    let self = this;
    var element = document.getElementById('modalContent');
    var modalBackground = document.getElementById('videoModal');
    modalBackground.classList.add('background-out');
    element.style.removeProperty('animation-name');
    element.classList.add('content-out');
    this.state.player.pauseVideo();
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

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  render() {
    return (
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
            <YouTube
              videoId={this.props.videoId}
              opts={{playerVars: {rel: 0, showinfo: 0, ecver: 2}}}
              onReady={this.onReady}
            />
          </div>
        </Zoom>
      </Modal>
    );
  }
}

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
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
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
