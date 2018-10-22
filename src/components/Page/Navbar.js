import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Text, breakpoint, BreakPoint, SafeLink } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'
import { Spring, animated } from 'react-spring'
const medium = css => breakpoint('medium', css)
import logo from './assets/logo.svg'

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}>
      <Text size="xlarge">{children}</Text>
    </Link>
  ) : (
    <SafeLink href={url}>
      <Text size="xlarge">{children}</Text>
    </SafeLink>
  )

class Navbar extends React.Component {
  state = {
    scroll: 0,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = event => {
    const scroll = (document.scrollingElement.scrollTop * 2) / 1000
    this.setState({ scroll: scroll })
  }
  renderIn = ({ x, menuItems, path }) => {
    return (
      <AragonNavbar
        style={{ background: x.interpolate(v => `rgba(28, 29, 35)`) }}
      >
        <Center>
          <BreakPoint from="medium">
            <ul>
              <div>
                <MenuItem
                  url={menuItems[0][0]}
                  label={menuItems[0][1]}
                  active={menuItems[0][2]}
                  renderLink={renderMenuItemLink}
                />
              </div>
              <div>
                <MenuItem
                  url={menuItems[1][0]}
                  label={menuItems[1][1]}
                  active={menuItems[1][2]}
                  renderLink={renderMenuItemLink}
                />
              </div>
              <div>
                <img src={logo} />
              </div>
              <div>
                <MenuItem
                  url={menuItems[2][0]}
                  label={menuItems[2][1]}
                  active={menuItems[2][2]}
                  renderLink={renderMenuItemLink}
                />
              </div>
              <div>
                <MenuItem
                  url={menuItems[3][0]}
                  label={menuItems[3][1]}
                  active={menuItems[3][2]}
                  renderLink={renderMenuItemLink}
                />
              </div>
            </ul>
          </BreakPoint>
          <BreakPoint to="medium">
            <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
          </BreakPoint>
        </Center>
      </AragonNavbar>
    )
  }
  render() {
    const { menuItems, path } = this.props
    return (
      <Spring
        from={{ x: 0 }}
        to={{ x: this.state.scroll }}
        menuItems={menuItems}
        path={path}
        native
      >
        {this.renderIn}
      </Spring>
    )
  }
}

const AragonNavbar = styled(animated.div)`
  width: 100%;
  height: 64px;
  background: rgb(28, 29, 35);
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
`

const Center = styled.div`
  width: auto;
  height: auto;
  ul {
    display: flex;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  button {
    margin: 0 0 0 10px;
  }
  img {
    margin: 0 30px;
  }
`

export default Navbar
