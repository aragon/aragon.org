import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Text, breakpoint, BreakPoint, SafeLink } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'
import logo from './assets/logo.svg'

const AraconNav = styled.div`
  width: 100%;
  height: 64px;
  background: #18181A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 5;

  &.scrolled{
    background:red;
  }
  &.navbar-home.navbar-animation {
    animation-name: navbar-animation;
    animation-duration: 1s;
    background-color: #18181A;
  }

  &.navbar-home.navbar-inverse-animation {
    animation-name: navbar-inverse-animation;
    animation-duration: 1s;
    background-color: transparent;
  }

  @keyframes navbar-animation {
    to {background-color: #18181A;}
    from {background-color: transparent;}
  }

  @keyframes navbar-inverse-animation {
    to {background-color: transparent;}
    from {background-color: #18181A;}
  }
  .brand {
    display: flex;
  }
  .brand img {
    height: 25px;
  }
  a.button {
    text-decoration: none;
    width: auto;
    padding: 10px 15px;
    white-space: nowrap;
    line-height: 1;
    font-size: 14px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0,0,0,0);
    color: #FFFFFF;
    background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );
    display: flex;
    align-items: center;
    margin: 0 0 0 25px;
    span {
      height: 13px;
      font-weight: 800;
    }
  }
`;

const End = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
  }
  button {
    margin: 0 0 0 10px;
  }
`;

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}><Text size="xlarge">{children}</Text></Link>
  ) : (
    <SafeLink href={url} target="_blank">
      <Text size="xlarge">{children}</Text>
    </SafeLink>
  );

class Navbar extends React.Component {

  scrollingAnimation = () => {
    let navbarElement = document.getElementById('navbar');

    if(document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
      navbarElement.classList.add('navbar-animation');
      navbarElement.classList.remove('navbar-inverse-animation');
    } else {
      navbarElement.classList.remove('navbar-animation');
      navbarElement.classList.add('navbar-inverse-animation');
    }
  }

  componentDidMount() {
    this.scrollingAnimation();
    let self = this;
    window.addEventListener('scroll', function() {
      self.scrollingAnimation();
    });
  }

  render() {
    const { menuItems, path } = this.props
    return (
      <AraconNav className={path === '/' ? 'navbar-home' : ''} id="navbar">
        <Link to="/" className="brand"><img src={logo}/></Link>
        <End>
          <BreakPoint from="large">
            <ul>
              {menuItems.map((item, i) => (
                <MenuItem
                  key={i}
                  url={item[0]}
                  label={item[1]}
                  active={item[2]}
                  renderLink={renderMenuItemLink}
                />
              ))}
            </ul>
          </BreakPoint>
          <BreakPoint to="large">
            <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
          </BreakPoint>
        </End>
      </AraconNav>
    )
  }
}

export default Navbar
