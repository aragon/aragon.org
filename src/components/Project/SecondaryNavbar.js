import React from 'react'
import styled from 'styled-components'
import { breakpoint, SafeLink } from '@aragon/ui'
import { Link } from 'react-static'
const medium = css => breakpoint('medium', css);
import governance from './assets/secondary-navbar/governance.svg'
import grants from './assets/secondary-navbar/grants.svg'
import roadmap from './assets/secondary-navbar/roadmap.svg'
import contribute from './assets/secondary-navbar/contribute.svg'
import blog from './assets/secondary-navbar/blog.svg'
import events from './assets/secondary-navbar/events.svg'
import wiki from './assets/secondary-navbar/wiki.svg'

const SecondaryNavbar = ({ page, ...props }) => (
  <Navbar>
    <Container>
      <InternalItem className={ page && page === 'governance' && 'active' } to="/project/governance">
        <img src={governance} />
        <h6>Governance</h6>
      </InternalItem>
      <InternalItem className={ page && page === 'grants' && 'active' } to="/project/grants">
        <img src={grants} />
        <h6>Grants</h6>
      </InternalItem>
      <InternalItem className={ page && page === 'contribute' && 'active' } to="/project/contribute">
        <img src={contribute} />
        <h6>Contribute</h6>
      </InternalItem>
      <Item href="https://blog.aragon.org/">
        <img src={blog} />
        <h6>Blog</h6>
      </Item>
      <InternalItem className={ page && page === 'roadmap' ? 'active roadmap-item' : 'roadmap-item'} to="/project/roadmap">
        <img src={roadmap} />
        <h6>Roadmap</h6>
      </InternalItem>
      <Item href="https://aracon.one/" target="_blank">
        <img src={events} />
        <h6>Events</h6>
      </Item>
      <Item href="https://wiki.aragon.org/" target="_blank">
        <img src={wiki} />
        <h6>Wiki</h6>
      </Item>
    </Container>
  </Navbar>
);

const Navbar = styled.nav`
  height: 131px;
  ${medium('height: 171px;')};
  background-color: white;
  padding-top: 32px;
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
  a {
    position: relative;
    display: flex;
    height: 142px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    ${medium('padding: 0 30px')};
  }

  h6 {
    display: none;
    ${medium('display: block')};
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #1C242D;
    margin-top: 15px;
  }
`
const Item = styled(SafeLink)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;

  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0726053);
  border-radius: 12px;
  width: 125px;
  transition: all 0.25s ease-in-out;
  &:hover{
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
  }
`
const InternalItem = styled(Link)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;

  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0726053);
  border-radius: 12px;
  width: 125px;

  &:hover{
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
  }

`

export default SecondaryNavbar
