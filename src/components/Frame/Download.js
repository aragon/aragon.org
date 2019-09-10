import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const About = () => {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = 'linux',
    osLink = 'https://frame.nyc3.digitaloceanspaces.com/0.2-rc2/Frame-0.2.0.AppImage',
    browser = 'firefox',
    browserLink = 'https://addons.mozilla.org/en-US/firefox/addon/frame-extension';


  var isChromium = window.chrome;
  var winNav = window.navigator;

  if ((winNav.userAgent.match("CriOS")) || (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    winNav.vendor === "Google Inc." &&
    (typeof window.opr !== "undefined") === false &&
    (winNav.userAgent.indexOf("Edge") > -1) === false
  )) {
    browser = 'chrome',
    browserLink = 'https://chrome.google.com/webstore/detail/frame/ldcoohedfbjoobcadoglnnmmfbdlmmhf';
  }

  if ((macosPlatforms.indexOf(platform) !== -1) || (iosPlatforms.indexOf(platform) !== -1)) {
    os = 'mac';
    osLink = 'https://frame.nyc3.digitaloceanspaces.com/0.2-rc2/Frame-0.2.0.dmg';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
    osLink = 'https://frame.nyc3.digitaloceanspaces.com/0.2-rc2/Frame-Setup-0.2.0.exe';
  }

  return (
    <StyledSection>
      <h3>
        Install Frame <br />
        <span className="blue">to interact with Aragon Agent</span>
      </h3>
      <Container>
        <Box>
          <h4>Step 1</h4>
          <div><img src={require(`./assets/${browser}.svg`)}/></div>
          <a className="principal-button centered" href={browserLink}>
            1 - Download browser extension
          </a>
        </Box>
        <Box>
        <h4>Step 2</h4>
        <div><img src={require(`./assets/${os}.svg`)}/></div>
        <a className="principal-button centered" href={osLink}>
          2 - Download Frame
        </a>
        </Box>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled(Section)`
  padding-bottom: 90px;
  .blue {
    background: -webkit-linear-gradient(69deg, #6590ff, #5d21d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    letter-spacing: -0.447059px;
    margin: 50px 0 5px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
    margin-bottom: 90px;
  }
`;
const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: auto'
  )}
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;
const Box = styled.div`
  background: #f9fafc;
  border-radius: 12px;
  padding: 45px;
  h4 {
    font-size: 38px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.447059px;
    color: #212B36;
  }
  a {
    width: 100%;
    display: block;
    text-align: center;
  }
  div {
    text-align: center;
    padding: 40px 0 50px 0;
  }
`;

export default About;
