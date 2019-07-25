import React from 'react'
import styled from 'styled-components'
import { breakpoint, SafeLink } from '@aragon/ui'
import { Link } from 'react-static'
const medium = css => breakpoint('medium', css);
import Governance from './assets/Governance'
import Grants from './assets/Grants.js'
import Contribute from './assets/Contribute.js'
import Roadmap from './assets/Roadmap.js'
import Blog from './assets/Blog.js'
import Aracon from './assets/Aracon.js'
import Wiki from './assets/Wiki.js'

const SecondaryNavbar = ({ page, ...props }) => (
  <Navbar>
    <Container>
      <InternalItem className={ page && page === 'governance' && 'active' } to="/project/governance">
        <Governance/>
        <h6>Governance</h6>
      </InternalItem>
      <InternalItem className={ page && page === 'grants' && 'active' } to="/project/grants">
        <Grants/>
        <h6>Grants</h6>
      </InternalItem>
      <InternalItem className={ page && page === 'contribute' && 'active' } to="/project/contribute">
        <Contribute/>
        <h6>Contribute</h6>
      </InternalItem>
      <Item href="https://blog.aragon.org/">
        <Blog/>
        <h6>Blog</h6>
      </Item>
      <InternalItem className={ page && page === 'roadmap' ? 'active roadmap-item' : 'roadmap-item'} to="/project/roadmap">
        <Roadmap/>
        <h6>Roadmap</h6>
      </InternalItem>
      <Item href="https://aracon.one/" target="_blank">
        <Aracon/>
        <h6>AraCon</h6>
      </Item>
      <Item href="https://wiki.aragon.org/" target="_blank">
        <Wiki/>
        <h6>Wiki</h6>
      </Item>
    </Container>
  </Navbar>
);

const Navbar = styled.nav`
  height: 131px;
  ${medium('height: 171px;')};
  background-color: #2d2e38;
  padding-top: 64px;
  height: 165px;
  ${medium('height: 205px;')};
  padding-top: 98px;
`
const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  color: white;
  height: 67px;
  ${medium('height: 107px;')};
  svg {
    width: 25px;
    ${medium('width: 40px')};
  }
  a.active, a:hover {
    svg {
      rect.white {
        fill: #22e0ff;
        transition: all 0.25s ease-in-out;
      }
    }
  }

  a {
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    ${medium('padding: 0 30px')};
    &:focus {
      outline: 0;
      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        right: 0;
        bottom: 2px;
        outline: 2px solid #22e0ff;
      }
    }
    &:active:after {
      display: none;
    }
  }
`
const Item = styled(SafeLink)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  &:hover,
  &.active {
    h6 {
      color: #22e0ff;
      transition: all 0.25s ease-in-out;
    }
    svg path.white {
      fill: #22e0ff;
      transition: all 0.25s ease-in-out;
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
const InternalItem = styled(Link)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  &.roadmap-item {
    h6 {
      margin-top: 2px;
    }
    svg {
      margin-top: 5px;
    }
  }
  &:hover,
  &.active {
    h6 {
      color: #22e0ff;
      transition: all 0.25s ease-in-out;
    }
    svg path.white {
      fill: #22e0ff;
      transition: all 0.25s ease-in-out;
    }
  }
  h6 {
    display: none;
    ${medium('display: block')};
  }
`

export default SecondaryNavbar
