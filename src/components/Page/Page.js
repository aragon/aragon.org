import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import styled from 'styled-components'
import { AragonApp, AppBar, breakpoint } from '@aragon/ui'
import Navbar from './Navbar'
import Footer from './Footer.js'
const medium = css => breakpoint('medium', css);

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
  h2 {
    font-family: 'GraphikLink', sans-serif;
    font-size: 42px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    color: #2d4051;
    margin: 30px 0;
  }
  h4 {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: center;
    color: #7f8198;
  }
  .action-button {
    font-family: 'GraphikRegular', sans-serif;
    font-size:16px;
    font-weight: 400;
    letter-spacing: normal;
    color: #01c3e3;
    margin-top: 30px;
    display: block;
    text-decoration: none;
  }
  .action-button img, {
    padding-left: 10px;
    height: 12px;
    width: auto;
  }
  .action-button span {
    display: inline-flex;
    align-items: center;
  }
  .hero-link {
    font-family: 'GraphikLink',sans-serif;
    margin-top: 30px!important;
    letter-spacing: 0.5px;
  }
  a {
    text-decoration: none;
  }
`;

export default Page
