import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'

import thumbnail from './assets/thumbnail.jpg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const StyledImg = styled.img`
  display: block;
  width: 100%;
  min-width: 320px;
  max-width: 1140px;
  height: auto;
  text-align: center;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 4px 64px rgba(149, 149, 149, 0.2);
  filter: brightness(66%);
  margin-bottom: 5rem;
  ${medium('margin-bottom: 12.5rem')};
`

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  transition: all 0.5s ease;
  margin-left: 50%;
  transform: translateX(-50%);
  flex-shrink: 0;
  margin-top: 40px;
  ${medium('margin-top: 75px')};

  .icon {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: 50% 33%;
    background-size: 10%;
    filter: invert(1);
    transition: all 0.5s ease;
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzQ1MScgd2lkdGg9JzQ1MScgIGZpbGw9IiMwMDAwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNTAsMTAwQzIyLjQzLDEwMCwwLDc3LjU3LDAsNTBTMjIuNDMsMCw1MCwwczUwLDIyLjQzLDUwLDUwUzc3LjU3LDEwMCw1MCwxMDB6IE01MCw0QzI0LjYzNiw0LDQsMjQuNjM2LDQsNTAgIHMyMC42MzYsNDYsNDYsNDZzNDYtMjAuNjM2LDQ2LTQ2Uzc1LjM2NCw0LDUwLDR6Ij48L3BhdGg+PHBvbHlnb24gcG9pbnRzPSIzOSwyNi4zNzYgMzksNzMuNjIzIDcxLjIzMiw1MCAiPjwvcG9seWdvbj48L3N2Zz4=");

    &:hover {
      opacity: 0.5;
    }
  }

  .hidden {
    display: none;
  }

  #player {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
	  height: 100%;
  }

  &.playing {
    margin-bottom: 25rem;
  }
`

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hidden: true }
    this.playVideo = this.playVideo.bind(this)

    // react-static doesn't like referencing document directly
    if (typeof document === 'undefined') return
    const tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = this.initPlayer.bind(this)
  }

  initPlayer() {
    this.player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'AqjIWmiAidw',
      playerVars: {
        rel: 0
      }
    })
  }

  playVideo() {
    this.setState(prevState => ({
      hidden: false
    }))
    this.player.playVideo()
  }

  render() {
    return (
      <StyledDiv onClick={this.playVideo} className={ this.state.hidden ? '' : 'playing' } {...this.props}>
        <StyledImg
          src={thumbnail}
          alt="Aragon"
        />
        <div className={ this.state.hidden ? 'hidden' : '' }>
          <div id="player"></div>
        </div>
        <div className="icon"></div>
      </StyledDiv> 
    )
  }
}

export default Video
