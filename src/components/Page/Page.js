import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import styled from 'styled-components'
import { AragonApp, AppBar, breakpoint } from '@aragon/ui'
import Navbar from './Navbar'
import Footer from './Footer.js'
const medium = css => breakpoint('medium', css);

const Content = styled.div`
  min-height: calc(100vh - 116px)!important;

  p {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: left;
    color: #7f8198;
  }
`;

const menuItems = [
  ['/discover', 'Discover'],
  ['https://hack.aragon.org/', 'Developers'],
  ['/project', 'Project'],
  ['/network', 'Network'],
];

class Page extends React.Component {

  render() {
    const { children, path } = this.props;
    const items = menuItems.map(item => [...item, item[0] === path]);

    return (
      <SiteData
        render={({ title: siteTitle }) => (
          <RouteData
            render={({ title }) => (
              <AragonApp publicUrl='/aragon-ui/' className="app">
                <Head>
                  <title>{title || siteTitle}</title>
                </Head>
                <Navbar menuItems={items} path={path} />
                <Content>{children}</Content>
                <Footer path={path}/>
              </AragonApp>
            )}
          />
        )}
      />
    )
  }
}

export default Page
