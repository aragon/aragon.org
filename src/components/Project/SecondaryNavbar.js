import React from 'react'
import styled from 'styled-components'
import { breakpoint, SafeLink } from '@aragon/ui'
const medium = css => breakpoint('medium', css);
import governance from './assets/governance.svg'
import grants from './assets/grants.svg'
import contribute from './assets/contribute.svg'
import blog from './assets/blog.svg'
import aracon from './assets/aracon.svg'
import wiki from './assets/wiki.svg'

const About = () => (
  <Navbar>
    <Container>
      <Item>
        <img src={governance}/>
        <h6>Governance</h6>
      </Item>
      <Item>
        <img src={grants}/>
        <h6>Grants</h6>
      </Item>
      <Item>
        <img src={contribute}/>
        <h6>Contribute</h6>
      </Item>
      <Item href="https://blog.aragon.org/" target="_blank">
        <img src={blog}/>
        <h6>Blog</h6>
      </Item>
      <Item href="https://aracon.one/" target="_blank">
        <img src={aracon}/>
        <h6>Aracon</h6>
      </Item>
      <Item href="https://wiki.aragon.org/" target="_blank">
        <img src={wiki}/>
        <h6>Wiki</h6>
      </Item>
    </Container>
  </Navbar>
);

const Navbar = styled.nav`
  height: 171px;
  background-color: #2d2e38;
  padding-top: 64px;
`
const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  color: white;
  height: 107px;
`
const Item = styled(SafeLink)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    h6 {
      color: #22e0ff;
    }
  }
  h6 {
    display: none;
    ${medium('display: block')};
  }
  img {
    width: 30px;
    ${medium('width: auto')};
  }
`
const InternalItem = styled.a`
  text-align: center;
  cursor: pointer;
  &:hover {
    h6 {
      color: #22e0ff;
    }
  }
  h6 {
    display: none;
    ${medium('display: bloack')};
  }
`

export default About
