import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import styled from 'styled-components'
import { AppBar, BaseStyles, PublicUrl, breakpoint } from '@aragon/ui'
import { FormattedMessage } from 'react-intl'
import Navbar from './Navbar'
import Footer from './Footer.js'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const menuItems = [
  [
    '/discover',
    <FormattedMessage id="page.navbar.discover" defaultMessage="Discover" />,
  ],
  [
    'https://hack.aragon.org/',
    <FormattedMessage
      id="page.navbar.developers"
      defaultMessage="Developers"
    />,
  ],
  [
    '/project',
    <FormattedMessage id="page.navbar.project" defaultMessage="Project" />,
  ],
  [
    '/network',
    <FormattedMessage id="page.navbar.network" defaultMessage="Network" />,
  ],
]

class Page extends React.Component {
  render() {
    const { contentColor, children, path, color } = this.props
    const items = menuItems.map(item => [...item, item[0] === path])
    return (
      <SiteData
        render={({ title: siteTitle }) => (
          <RouteData
            render={({ title }) => (
              <PublicUrl.Provider url="/aragon-ui/">
                <BaseStyles enableLegacyFonts />
                <Head>
                  <title>{title || siteTitle}</title>
                </Head>
                <Header>
                  <AnnouncementBanner href="https://anj.aragon.org/">
                    <p>
                      <FormattedMessage
                        id="page.banner"
                        defaultMessage="Aragon Court is launching."
                      />{' '}
                      <FormattedMessage
                        id="page.banner.action"
                        defaultMessage="Stake ANT and become a juror today!"
                      />
                    </p>
                  </AnnouncementBanner>
                  <Navbar menuItems={items} path={path} color={color} />
                </Header>
                <Content contentColor={contentColor}>{children}</Content>
                <Footer path={path} />
              </PublicUrl.Provider>
            )}
          />
        )}
      />
    )
  }
}
const Content = styled.div`
  min-height: calc(100vh - 116px) !important;
  ${p => p.contentColor && 'background-color: ' + p.contentColor}
  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: left;
    color: #7f8198;
  }
  h2 {
    font-family: 'FontBold', sans-serif;
    font-size: 52px;
    ${medium('font-size: 68px;')}
    line-height: 1;
    text-align: center;
    letter-spacing: -1.8px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  h4 {
    font-family: 'FontRegular', sans-serif;
    font-size: 18px;
    ${medium('font-size: 22px;')}
    line-height: 1.6;
    text-align: center;
    letter-spacing: 0.33px;
    color: #ffffff;
  }
  .action-button {
    font-family: 'FontMedium', sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    color: #4a80e4;
    margin-top: 10px;
    ${large('margin-top: 10px;')}
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
  .action-button img {
    padding-left: 10px;
    height: 12px;
    width: auto;
    margin: 0;
  }
  .action-button span {
    display: inline-flex;
    align-items: center;
  }
  .hero-link {
    font-family: 'FontRegular', sans-serif;
    margin-top: 30px !important;
    letter-spacing: 0.5px;
    font-size: 15px;
  }
  .principal-hero-link {
    font-family: 'FontRegular', sans-serif;
    margin-top: 25px !important;
    letter-spacing: 0.5px;
    font-size: 15px;
    margin-bottom: 15px;
  }
  a {
    text-decoration: none;
  }
  .principal-button {
    background: linear-gradient(186.69deg, #32fff5 -103.98%, #01bfe3 80.13%);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.150249);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    font-family: 'FontMedium';
    padding: 14px 28px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
  }
  .secondary-button {
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.150249);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #212b36;
    font-family: 'FontMedium';
    padding: 14px 28px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }
  .principal-button:hover,
  .secondary-button:hover {
    opacity: 0.95;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.150249);
  }
  .principal-button.centered,
  .secondary-button.centered {
    margin: 0 10px;
  }
  .hero-button-container {
    height: 83px;
    display: flex;
    align-items: center;
  }
  .hero-button-container.centered {
    justify-content: center;
  }
  .hero-button-container.left {
    justify-content: flex-start;
  }
  .;
`

const Header = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 5;
`
const AnnouncementBanner = styled.a.attrs({ target: '_blank' })`
  position: relative;
  display: block;
  padding: 10px 0;
  text-align: center;
  background-image: linear-gradient(186deg, rgb(50, 255, 245) -100%, rgb(1, 191, 227) 80%);
  color: #FFF;
  transition: none;
  &:hover {
    text-decoration: none;
  }
  &:after {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #3E7BF6;
  }
  &:focus:after {
    display: block;
  }
  &:focus:active:after {
    display: none;
  }
  p {
    padding: 0 30px;
    line-height: 20px;
    text-align: center:;
    color: #FFF;
    overflow: hidden;
    max-width: 100%;
    max-height: 66px;
    font-weight: 700;
  }
`

export default Page
