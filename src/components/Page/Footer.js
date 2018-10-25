import React from 'react'
import { Text, breakpoint, SafeLink } from '@aragon/ui'
import { Link } from 'react-static'
import styled from 'styled-components'
import Section from '../General/Section'
import logo from './assets/logo.svg'
import twitter from './assets/twitter.svg'
import ghost from './assets/ghost.svg'
import rocket from './assets/rocket.svg'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);


const FooterSection = styled(Section)`
  background-color: #f9fafc;
`;

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 16.66% 16.66% 16.66% 16.66% 33.32%;')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`

const Item = styled.div`
  a {
    display: block;
    font-family: 'GraphikRegular', sans-serif;
    font-size: 14px;
    line-height: 3.14;
    color: #7f8198;
    cursor: pointer;
  }
  a:hover {
    opacity: 0.8;
  }
  p, form {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 14px;
    line-height: 3.14;
    color: #7f8198;
  }
  form {
    button {
      margin-left: 15px;
      opacity: 0.35;
      border-radius: 1px;
      background-image: linear-gradient(72deg, #00dbe2, #01bfe3);
      color: white;
      border: solid 0px transparent;
      padding: 0 30px;
      line-height: 2.4;
    }
    input {
      line-height: 2;
      border: solid 0px transparent;
      border-bottom: solid 1px #d8d8d8;
      background: transparent;
      outline: none;
    }
  }
`
const Box = styled.div`
  margin: 0 -15px;
  a {
    display: inline;
    padding: 0 15px;
  }
`

const Footer = ({ ...props }) => (
  <FooterSection>
    <Container>
      <Item>
          <Link to="/"><img src={logo} /></Link>
      </Item>
      <Item>
        <a>Core</a>
        <a>Network</a>
        <a>Fundation</a>
        <a>About</a>
      </Item>
      <Item>
        <a>Wiki</a>
        <a>Network</a>
        <a>Fundation</a>
        <a>About</a>
      </Item>
      <Item>
        <a>Legal</a>
        <a>Network</a>
        <a>Fundation</a>
        <a>About</a>
      </Item>
      <Item>
        <p>Follow us</p>
        <Box><a><img src={twitter} /></a><a><img src={ghost} /></a><a><img src={rocket} /></a></Box>
        <p>Be part of the conversation</p>
        <form action="https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&amp;id=e81a44c4bd" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
          <div className="email-field">
            <input type="email" name="EMAIL" placeholder="Enter your email" className="required email" id="mce-EMAIL"/>
            <div aria-hidden="true" style={{position:'absolute', left:'-5000px'}}>
              <input type="text" name="b_a590aa3843a54b079d48e6e18_e81a44c4bd" tabIndex="-1" value=""/>
            </div>
            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe</button>
          </div>
        </form>
      </Item>
    </Container>
  </FooterSection>
);

export default Footer
