import React from 'react';
import {Text, breakpoint, SafeLink} from '@aragon/ui';
import {Link} from 'react-static';
import styled from 'styled-components';
import Section from '../General/Section';
import backgroundImage from './assets/prefooter.png';
import logo from './assets/logo-footer.svg';
import twitter from './assets/twitter.svg';
import ghost from './assets/ghost.svg';
import forum from './assets/forum.png';
import rocket from './assets/rocket.svg';
import youtube from './assets/youtube.svg';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Footer = ({...props}) => (
  <FooterSection>
    <PreFooter>
      <PreFooterText>
      <h2>Try Aragon now</h2>
      <p>Create now global, bureaucracy-free organizations, companies, or communities.</p>
      </PreFooterText>
      <div>
        <a className="secondary-button centered" href="./discover">
          Discover Aragon
        </a>
        <a className="principal-button centered" href="./discover">
          Try the product
        </a>
      </div>
    </PreFooter>
    <Container>
      <Item className="mobile-full">
        <Link to="/">
          <LogoImg src={logo} />
        </Link>
      </Item>
      <Item>
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/project">Project</Link>
        <Link to="/network">Network</Link>
      </Item>
      <Item>
        <a href="https://hack.aragon.org/" target="_blank">
          Developers
        </a>
        <a href="https://wiki.aragon.org/dev/bug_bounty/" target="_blank">
          Bug bounty
        </a>
        <Link to="/project/grants">Grants</Link>
        <Link to="/project/governance">Governance</Link>
      </Item>
      <Item>
        <Link to="/project/contribute">Contribute</Link>
        <a href="https://blog.aragon.org/">Blog</a>
        <a href="https://wiki.aragon.org/" target="_blank">
          Wiki
        </a>
        <a href="https://wiki.aragon.org/dev/bug_bounty/" target="_blank">
          Security
        </a>
      </Item>
      <Item className="mobile-full">
        <p>Be part of the conversation</p>
        <Box>
          <a href="https://twitter.com/aragonproject" target="_blank">
            <img src={twitter} />
          </a>
          <a href="https://aragon.chat/" target="_blank">
            <img src={rocket} />
          </a>
          <a href="https://forum.aragon.org/" target="_blank">
            <Forum src={forum} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCODiU_-FWhr4SVOoBlm-qaQ"
            target="_blank">
            <Youtube src={youtube} />
          </a>
        </Box>
        <p>Subscribe to our newsletter</p>
        <form
          action="https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&amp;id=e81a44c4bd"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate>
          <div className="email-field">
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              className="required email"
              id="mce-EMAIL"
            />
            <div
              aria-hidden="true"
              style={{position: 'absolute', left: '-5000px'}}>
              <input
                type="text"
                name="b_a590aa3843a54b079d48e6e18_e81a44c4bd"
                tabIndex="-1"
              />
            </div>
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button">
              Subscribe
            </button>
          </div>
        </form>
      </Item>
    </Container>
  </FooterSection>
);

const FooterSection = styled(Section)`
  background-color: #f9fafc;
  .principal-button {
    background: linear-gradient(186.69deg, #32fff5 -103.98%, #01bfe3 80.13%);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.150249);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    font-family: 'FontMedium';
    padding: 14px 28px;
    text-decoration: none;
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
    text-decoration: none;
  }
  .principal-button.centered,
  .secondary-button.centered {
    margin: 10px;
    ${medium('margin: 10px;')};
    display:  block;
    ${medium('display: inline;')};
  }
`;
const PreFooterText = styled.div`
  width: 100%;
  text-align: center;
  ${medium('width: 45%; text-align: left;')};
`
const PreFooter = styled.div`
  min-height: 70px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.150249);
  border-radius: 6px;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  flex-direction: column;
  ${medium('flex-direction: row; padding: 60px;')};
  h2 {
    font-family: 'FontMedium';
    font-size: 42px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #212b36;
  }
  p {
    font-family: 'FontRegular';
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    margin-top: 12px;
    color: #6d7693;
  }
`;

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 16.66% 16.66% 16.66% 16.66% 33.32%;')};
  grid-template-columns: 33%;
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  padding: 30px 0;
`;

const Item = styled.div`
  a {
    display: block;
    font-family: 'FontRegular', sans-serif;
    font-size: 14px;
    line-height: 3.14;
    color: #7f8198;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }
  p,
  form {
    font-family: 'FontRegular', sans-serif;
    font-size: 14px;
    line-height: 3.14;
    color: #7f8198;
  }
  form {
    button {
      margin-left: 15px;
      opacity: 0.35;
      border-radius: 3px;
      background-image: linear-gradient(72deg, #00dbe2, #01bfe3);
      color: white;
      border: solid 0px transparent;
      padding: 0 30px;
      line-height: 2.4;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
    input {
      line-height: 2;
      border: solid 0px transparent;
      border-bottom: solid 1px #d8d8d8;
      background: transparent;
      outline: none;
    }
  }
  &.mobile-full {
    grid-column-start: 1;
    ${medium('grid-column-end: inherit; grid-column-start: inherit;')};
    grid-column-end: 4;
  }
`;
const Box = styled.div`
  margin: 0 -15px;
  a {
    display: inline;
    padding: 0 15px;
    text-decoration: none;
  }
`;

const Forum = styled.img`
  height: 19px;
  width: 19px;
`;
const Youtube = styled.img`
  margin-bottom: 1px;
`;
const LogoImg = styled.img`
  height: 50px;
`;

export default Footer;
