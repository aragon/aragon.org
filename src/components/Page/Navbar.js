import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
import {Text, breakpoint, BreakPoint, SafeLink} from '@aragon/ui';
import MenuItem from './MenuItem';
import MenuPanel from './MenuPanel';
import {Spring, animated} from 'react-spring';
const medium = css => breakpoint('medium', css);
import logo from './assets/logo.svg';

const renderMenuItemLink = ({url, children}) =>
  url.startsWith('/') ? (
    <Link to={url}>{children}</Link>
  ) : (
    <SafeLink href={url}>{children}</SafeLink>
  );

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    let scroll = 1;
    if (
      typeof window !== `undefined` &&
      window.location.href.indexOf('bella') >= 0
    ) {
      scroll = 0;
    }
    this.state = {
      scroll: scroll,
      height: 64,
      image: 44,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = event => {
    let scroll = 1 - (document.scrollingElement.scrollTop * 2) / 1000;
    let image = 1 - (document.scrollingElement.scrollTop * 2) / 1000;

    if (scroll < 0.8) {
      scroll = 0.8;
      image = 0.8;
    }
    if (
      window.location.href.indexOf('bella') >= 0 &&
      document.scrollingElement.scrollTop == 0
    ) {
      scroll = 0;
    }
    let height = 1 - (document.scrollingElement.scrollTop * 2) / 1000;

    if (height < 0.68) {
      height = 0.68;
    }

    this.setState({
      scroll: scroll,
      height: height * 64,
      image: image * 44,
    });
  };
  renderIn = ({x, h, i, menuItems, path}) => {
    return (
      <AragonNavbar
        style={{
          background: x.interpolate(v => `rgba(28, 29, 35, ${v})`),
          height: h.interpolate(v => `${v}px`),
        }}>
        <Center>
          <BreakPoint from="medium">
            <ul className="left">
              <li>
                <MenuItem
                  url={menuItems[0][0]}
                  label={menuItems[0][1]}
                  active={menuItems[0][2]}
                  renderLink={renderMenuItemLink}
                />
              </li>
              <li>
                <MenuItem
                  url={menuItems[1][0]}
                  label={menuItems[1][1]}
                  active={menuItems[1][2]}
                  renderLink={renderMenuItemLink}
                />
              </li>
            </ul>
            <ul>
              <li className="logo">
                <LogoLink to="/">
                  <img src={logo} />
                </LogoLink>
              </li>
            </ul>
            <ul className="right">
              <li>
                <MenuItem
                  url={menuItems[2][0]}
                  label={menuItems[2][1]}
                  active={menuItems[2][2]}
                  renderLink={renderMenuItemLink}
                />
              </li>
              <li>
                <MenuItem
                  url={menuItems[3][0]}
                  label={menuItems[3][1]}
                  active={menuItems[3][2]}
                  renderLink={renderMenuItemLink}
                />
              </li>
            </ul>
          </BreakPoint>
          <BreakPoint to="medium">
            <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
            <Link to={'/'}>
              <span>
                <MobileLogo src={logo} />
              </span>
            </Link>
            <div style={{width: '30px'}}>
              <span />
            </div>
          </BreakPoint>
        </Center>
      </AragonNavbar>
    );
  };
  render() {
    const {menuItems, path} = this.props;
    return (
      <Spring
        from={{x: 0, h: 64, i: 44}}
        to={{x: this.state.scroll, h: this.state.height, i: this.state.image}}
        menuItems={menuItems}
        path={path}
        native>
        {this.renderIn}
      </Spring>
    );
  }
}

const AragonNavbar = styled(animated.div)`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  ${medium('justify-content: center;')};
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 5;
  .brand {
    display: flex;
  }
  a {
    position: relative;
    height: 100%;
    &:focus {
      outline: 0;
      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: -5px;
        right: -5px;
        bottom: 0;
        outline: 2px solid #22e0ff;
      }
    }
    &:active:after {
      display: none;
    }
  }
  ${medium(`
    a:focus:after {
      left: 0;
      right: 0;
    }
  `)};
`;

const Center = styled.div`
  ul {
    display: flex;
    height: 100%;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }
  li.logo {
    width: 100px;
  }
  ul.right,
  ul.left {
    min-width: 350px;
  }
  button {
    margin: 0 0 0 10px;
  }
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${medium('width: auto; height: 100%; display: inherit;')};
`;

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 100%;
  img {
    height: 62%;
  }
`;

const MobileLogo = styled.img`
  margin: 0 !important;
  position: relative;
  top: 19%;
  height: 62%;
`;

export default Navbar;
