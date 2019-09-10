import React from 'react';
import {Link, SiteData, RouteData, Head} from 'react-static';
import styled from 'styled-components';
import {AppBar, BaseStyles, PublicUrl, breakpoint} from '@aragon/ui';
import Navbar from './Navbar';
import Footer from './Footer.js';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const menuItems = [
  ['/discover', 'Discover'],
  ['https://hack.aragon.org/', 'Developers'],
  ['/project', 'Project'],
  ['/network', 'Network'],
];

class Page extends React.Component {
  render() {
    const {contentColor, children, path, color} = this.props;
    const items = menuItems.map(item => [...item, item[0] === path]);
    return (
      <SiteData
        render={({title: siteTitle}) => (
          <RouteData
            render={({title}) => (
              <PublicUrl.Provider url="/aragon-ui/">
                <BaseStyles enableLegacyFonts />
                <Head>
                  <title>{title || siteTitle}</title>
                </Head>
                <Navbar menuItems={items} path={path} color={color} />
                <Content contentColor={contentColor}>{children}</Content>
                <Footer path={path} />
              </PublicUrl.Provider>
            )}
          />
        )}
      />
    );
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
    font-family: 'FontRegular', sans-serif;
    font-size: 16px;
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
`;

const AGPBanner = styled.div `
  position: fixed;
  z-index: 5;
  width: 100vw;
  text-align: center;
  background-image: linear-gradient(90deg, #2CF4E1, #2CB2E1);
  p {
    line-height: 35px;
    padding: 0 30px;
    text-align: center:;
    color: black;
  }
  a {
    font-weight: 700;
  }
`

export default Page
