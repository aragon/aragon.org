import React from 'react'
import { Router, Link, getRouteProps } from 'react-static'
import Routes from 'react-static-routes'
import { styled } from '@aragon/ui'
import { AragonApp, Header, PreFooter, Footer } from '@aragon/ui'

const menuItems = [
  ['/core', 'Core'],
  ['/network', 'Network'],
  ['/foundation', 'Foundation'],
  ['/about', 'About'],
  ['/join', 'Join us'],
  ['https://wiki.aragon.one', 'Wiki'],
]

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}>{children}</Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )

const Content = styled.div`
  min-height: 200px;
`

class Page extends React.Component {
  render() {
    const { children, path } = this.props
    const items = menuItems.map(item => [...item, item[0] === path])
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Header menuItems={items} renderMenuItemLink={renderMenuItemLink} />
        <Content>{children}</Content>
        <PreFooter />
        <Footer />
      </AragonApp>
    )
  }
}

export default Page
