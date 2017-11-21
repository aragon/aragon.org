import React from 'react'
import { styled } from '@aragon/ui'
import { Section, Text, theme } from '@aragon/ui'

import TwitterIcon from './assets/twitter.svg'
import MediumIcon from './assets/medium.svg'
import GitHubIcon from './assets/github.svg'

const Main = styled(Section)`
  padding-top: 50px;
  text-align: center;

  .picture {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    transition: all 0.5s;
  }

  .picture:hover {
    transform: translateY(-5px);
  }

  h1 {
    margin-top: 20px;
    font-size: 22px;
  }

  h2 {
    font-size: 16px;
    color: ${theme.textSecondary};
  }

  .socials {
    margin-top: 15px;
  }

  .socials a img {
    width: 16px;
    height: 16px;
    margin: 0 5px;
  }
`

const Member = ({ picture, name, title, twitter, medium, github }) => (
  <Main>
    <div>
      <img src={require(`./assets/pictures/${picture}`)} alt="" className="picture" />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <div className="socials">
        {twitter ?
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="" /></a> : null}
        {medium ?
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer"><img src={MediumIcon} alt="" /></a> : null}
        {github ?
          <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt="" /></a> : null}
      </div>
    </div>
  </Main>
)

export default Member
