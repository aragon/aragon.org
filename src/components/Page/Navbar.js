import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import Dropdown from 'react-bootstrap/Dropdown'
import { injectIntl, intlShape } from 'react-intl'
import { Spring, animated } from 'react-spring'
import { Text, breakpoint, BreakPoint, SafeLink } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'
import en from './assets/en.svg'
import es from './assets/es.svg'
import logo from './assets/logo.svg'

const medium = css => breakpoint('medium', css)

const renderMenuItemLink = ({ url, children, locale }) =>
  url.startsWith('/') ? (
    <Link to={locale ? '/' + locale + url : url}>{children}</Link>
  ) : (
    <SafeLink href={url}>{children}</SafeLink>
  )

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    let scroll = 1
    if (
      typeof window !== `undefined` &&
      window.location.href.indexOf('bella') >= 0
    ) {
      scroll = 0
    }
    this.state = {
      scroll: scroll,
      height: 64,
      image: 44,
      opacity: 0,
    }
  }

  static propTypes = {
    intl: intlShape.isRequired,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = event => {
    let scroll = 1 - (document.scrollingElement.scrollTop * 2) / 1000

    let opacity = 0.009 * document.scrollingElement.scrollTop
    if (opacity > 0.9) {
      opacity = 0.9
    }

    if (scroll < 0.8) {
      scroll = 0.8
    }
    if (
      window.location.href.indexOf('bella') >= 0 &&
      document.scrollingElement.scrollTop == 0
    ) {
      scroll = 0
    }
    let height = 1 - (document.scrollingElement.scrollTop * 2) / 1000

    if (height < 0.68) {
      height = 0.68
    }

    this.setState({
      scroll: scroll,
      height: height * 64,
      opacity: opacity,
    })
  }

  render() {
    const { menuItems, path, color, intl } = this.props
    let background = 'rgba(28, 36, 46, '
    if (color && color == 'black') {
      background = 'rgba(254, 254, 254, '
    }

    // ugly hack to get the nav items white on /en/court
    // FIXME
    const itemColor =
      typeof window !== 'undefined' &&
      /court/.test(window.location.href) &&
      this.state.scroll >= 0.95
        ? '#ffffff'
        : color

    return (
      <Inside
        x={this.state.scroll}
        h={this.state.height}
        opacity={this.state.opacity}
        menuItems={menuItems}
        path={path}
        color={itemColor}
        locale={intl.locale}
        background={background}
      />
    )
  }
}

const Inside = ({
  x,
  h,
  opacity,
  menuItems,
  path,
  background,
  color,
  locale,
}) => (
  <AragonNavbar
    style={{
      height: h,
      background: background + opacity + ')',
    }}
  >
    <Center>
      <BreakPoint from="medium">
        <ul className="left">
          <li>
            <MenuItem
              url={menuItems[0][0]}
              label={menuItems[0][1]}
              active={menuItems[0][2]}
              renderLink={renderMenuItemLink}
              color={color}
            />
          </li>
          <li>
            <MenuItem
              url={menuItems[1][0]}
              label={menuItems[1][1]}
              active={menuItems[1][2]}
              renderLink={renderMenuItemLink}
              color={color}
            />
          </li>
        </ul>
        <ul>
          <li className="logo">
            <LogoLink to={locale ? '/' + locale + '/' : '/'}>
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
              color={color}
            />
          </li>
          <li>
            <MenuItem
              url={menuItems[3][0]}
              label={menuItems[3][1]}
              active={menuItems[3][2]}
              renderLink={renderMenuItemLink}
              color={color}
            />
          </li>
        </ul>
      </BreakPoint>
      <BreakPoint to="medium">
        <MenuPanel
          items={menuItems}
          renderLink={renderMenuItemLink}
          color={color}
        />
        <Link to={locale ? '/' + locale + '/' : '/'}>
          <span>
            <MobileLogo src={logo} />
          </span>
        </Link>
        <div style={{ width: '24px' }}>
          <span />
        </div>
      </BreakPoint>
    </Center>
    <Intl>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          {localStorage.getItem('locale') == 'es' ? (
            <img src={es} alt="Idioma" />
          ) : (
            <img src={en} alt="Language" />
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              localStorage.setItem('locale', 'en')
              if (window.location.href.indexOf('/es/') >= 0) {
                let url = window.location.href.split('/es/')
                window.location.href = url[0] + '/en/' + url[1]
              } else {
                window.location.reload(false)
              }
            }}
          >
            <img src={en} alt="" /> English
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              localStorage.setItem('locale', 'es')
              if (window.location.href.indexOf('/en/') >= 0) {
                let url = window.location.href.split('/en/')
                window.location.href = url[0] + '/es/' + url[1]
              } else {
                window.location.reload(false)
              }
            }}
          >
            <img src={es} alt="" /> Español
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Intl>
  </AragonNavbar>
)

const AragonNavbar = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  ${medium('justify-content: center;')};
  align-items: center;
  padding: 0 20px;
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
`

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
    min-width: 357px;
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
`

const Intl = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9999999;
  .dropdown-menu {
    width: 30px;
    left: auto !important;
    right: 0px !important;
    transform: translate3d(-6px, 39px, 0px) !important;
  }
  .btn-primary,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .btn-primary:not(:disabled):not(.disabled):active,
  .show > .btn-primary.dropdown-toggle {
    color: black;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-color: transparent;
    outline: none;
    box-shadow: none;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 100%;
  img {
    height: 62%;
    margin-bottom: 2px;
  }
`

const MobileLogo = styled.img`
  margin: 0 !important;
  position: relative;
  top: 19%;
  height: 62%;
`

export default injectIntl(Navbar)
