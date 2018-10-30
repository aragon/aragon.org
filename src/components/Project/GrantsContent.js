import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <span>
    <p>Aragon Nest is run in the open. We want to remain transparent to our community and the grant applicants. Everything going on in Nest is reflected in GitHub.</p>
    <p>
      <a className="action-button" href="https://github.com/aragon/nest" target="_blank">
        <span>Nest in GitHub <img src={require(`../General/assets/arrow.svg`)}/></span>
      </a>
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>We are looking for people that want to help the Aragon and Ethereum ecosystems advance. If you believe you have a proposal for the program, read more and apply.</p>
    <p>
      <a className="action-button" href="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant" target="_blank">
        <span>Apply <img src={require(`../General/assets/arrow.svg`)}/></span>
      </a>
    </p>
  </span>
);

const GrantsContent = () => (
  <Section>
    <Container>
      <LongCard textAlign="center" color="#b4b5cc" gradient="radial-gradient(circle at 99% 100%, #1c1d23, #2d2e39)" colorWhite title="A thriving ecosystem">
        <LongCardContainer>
          <div>
            <h5 className="one">$1.5</h5>
            <h3 className="one">Millions given away in grants</h3>
          </div>
          <div>
            <h5 className="two">15</h5>
            <h3 className="two">Teams working together</h3>
          </div>
          <div>
            <h5 className="three">60</h5>
            <h3 className="three">People making their dreams possible</h3>
          </div>
          <div>
            <h5 className="four">120</h5>
            <h3 className="four">Applications to the program</h3>
          </div>
        </LongCardContainer>
      </LongCard>
      <Card linkTo="https://github.com/aragon/nest" imageUrl={'Project/assets/governance2'} title="Fully transparent" content={mudule1Content}></Card>
      <Card linkTo="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant" imageUrl={'Home/home-assets/home4'} title="Apply now" content={mudule2Content}></Card>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

const LongCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${medium('flex-wrap: nowrap;')};
  background-image: linear-gradient(119deg, #faf9f4, #2c86d0);
  -webkit-background-clip: text;
  background-clip: text;
  
  -webkit-text-fill-color: white;
  -webkit-text-fill-color: transparent;
  color: white;
  // -webkit-text-fill-color: white;
  margin: 30px -10% 0 -10%;
  div {
    padding: 15px;
  }

  h5 {
    font-family: 'FontLight', sans-serif;
    font-size: 68px;
    font-weight: 300;
    line-height: 1.82;
    text-align: center;
  }
  h3 {
    font-family: 'FontLight', sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.33;
    text-align: center;
  }
  h5, h3 {
    background-image: -webkit-linear-gradient(119deg, #faf9f4, #2c86d0);
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }
  h3.one, h5.one {
    background-image: -webkit-linear-gradient(119deg, #FAF9F4, #F9F5DE);
  }
  h3.two, h5.two {
    background-image: -webkit-linear-gradient(119deg, #E1F6ED,  #92BDCB);
  }
  h3.three, h5.three {
    background-image: -webkit-linear-gradient(119deg, #E8E5F7, #ADC5DB);
  }
  h3.four, h5.four {
    background-image: -webkit-linear-gradient(119deg, #B0CBE4, #2C86D0);
  }
`

export default GrantsContent
