import React from 'react'
import { Text, breakpoint, SafeLink } from '@aragon/ui'
import { Link } from 'react-static'
import styled from 'styled-components'
import logo from './assets/logo-footer.svg'
import twitter from './assets/twitter.svg'
import ghost from './assets/ghost.svg'
import forum from './assets/forum.png'
import rocket from './assets/rocket.svg'
import discord from './assets/discord.svg'
import spectrum from './assets/spectrum.svg'
import youtube from './assets/youtube.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Footer = ({ ...props }) => (
  <FooterSection>
    <Container>
      <Item className="mobile-full">
        <a href="https://aragon.org" target="_blank">
          <LogoImg src={logo} />
        </a>
      </Item>
      <Item>
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/project">Project</Link>
        <Link to="/network">Network</Link>
      </Item>
      <Item>
        <a href="https://hack.aragon.org/" target="_blank">
          Developers
        </a>
        <a href="https://wiki.aragon.org/dev/bug_bounty/" target="_blank">
          Bug bounty
        </a>
        <Link to="/project/grants">Grants</Link>
        <Link to="/project/governance">Governance</Link>
      </Item>
      <Item>
        <Link to="/project/contribute">Contribute</Link>
        <a href="https://blog.aragon.org/">Blog</a>
        <a href="https://wiki.aragon.org/" target="_blank">
          Wiki
        </a>
        <a href="https://aracon.one/" target="_blank">
          AraCon
        </a>
      </Item>
      <Item className="mobile-full">
        <p>Be part of the conversation</p>
        <Box>
          <a href="https://twitter.com/aragonproject" target="_blank">
            <img src={twitter} />
          </a>
          <a href="https://discord.gg/ruBR6GN" target="_blank">
            <Discord src={discord} />
          </a>
          <a href="https://forum.aragon.org/" target="_blank">
            <Forum src={forum} />
          </a>
          <a href="https://spectrum.chat/aragon" target="_blank">
            <Spectrum src={spectrum} />
          </a>            
          <a
            href="https://www.youtube.com/channel/UCODiU_-FWhr4SVOoBlm-qaQ"
            target="_blank"
          >
            <Youtube src={youtube} />
          </a>
        </Box>
        <p>Subscribe to our newsletter</p>
        <form
          action="https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&amp;id=e81a44c4bd"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <div className="email-field">
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              className="required email"
              id="mce-EMAIL"
            />
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              <input
                type="text"
                name="b_a590aa3843a54b079d48e6e18_e81a44c4bd"
                tabIndex="-1"
              />
            </div>
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            >
              Subscribe
            </button>
          </div>
        </form>
      </Item>
    </Container>
  </FooterSection>
)

const FooterSection = styled.section`
  background-color: #28548b;
  padding: 60px 15px;
`

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 16.66% 16.66% 16.66% 16.66% 30.32%;')};
  grid-template-columns: 33%;
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  padding: 30px 0;
  max-width: 1100px;
  margin auto;
  width: 95%;
`

const Item = styled.div`
  a {
    display: block;
    font-family: 'FontRegular', sans-serif;
    font-size: 14px;
    line-height: 3.14;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }
  p {
    margin: 0;
  }
  p,
  form {
    font-family: 'FontRegular', sans-serif;
    font-size: 14px;
    line-height: 3.14;
    color: white;
  }
  form {
    button {
      margin-left: 15px;
      border-radius: 3px;
      background-color: #3b84f8;
      color: white;
      border: solid 0px transparent;
      padding: 0 30px;
      line-height: 2.4;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
    input {
      line-height: 2;
      border: solid 0px transparent;
      border-bottom: solid 1px #84a5cd;
      background: transparent;
      outline: none;
      color: white;
    }
    input::placeholder {
      color: #84a5cd;
    }
  }
  &.mobile-full {
    grid-column-start: 1;
    ${medium('grid-column-end: inherit; grid-column-start: inherit;')};
    grid-column-end: 4;
  }
`
const Box = styled.div`
  margin: 0 -15px;
  a {
    display: inline;
    padding: 0 15px;
    text-decoration: none;
  }
  img {
    padding: 0 !important;
  }
`

const Forum = styled.img`
  height: 19px;
  width: 19px;
  padding: 0 !important;
`
const Discord = styled.img`
  height: 19px;
  width: 19px;
`
const Spectrum = styled.img`
  height: 22px;
  width: 22px;
  margin-bottom: 5px;
`
const Youtube = styled.img`
  margin-bottom: 1px;
  padding: 0 !important;
`
const LogoImg = styled.img`
  height: 50px;
  padding: 0 !important;
`

export default Footer
