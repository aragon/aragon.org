import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>Aragon Nest is run in the open. That way, we ensure we remain transparent to our community and the grant recipients and applicants. Everything going on in Nest is reflected in GitHub.</p>);
const mudule2Content = (<p>We are looking for people that want to help the Aragon and Ethereum ecosystems advance. If you believe you have a proposal or an application for the program, read more and apply.</p>);

const About = () => (
  <Section>
    <Container>
      <LongCard textAlign="center" color="#b4b5cc" gradient="radial-gradient(circle at 99% 100%, #1c1d23, #2d2e39)" colorWhite title="A thriving ecosystem">
        <LongCardContainer>
          <div>
            <h5>$1.5</h5>
            <h3>Millions given away in grants</h3>
          </div>
          <div>
            <h5>15</h5>
            <h3>Teams working together</h3>
          </div>
          <div>
            <h5>60</h5>
            <h3>People making their dreams possible</h3>
          </div>
          <div>
            <h5>120</h5>
            <h3>Applications to the program</h3>
          </div>
        </LongCardContainer>
      </LongCard>
      <Card imageUrl={'Project/assets/governance2'} title="Fully transparent" content={mudule1Content}></Card>
      <Card imageUrl={'Home/assets/home4'} title="Apply now" content={mudule2Content}></Card>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 50% 50%; grid-template-rows: 500px 500px')};
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
  -webkit-text-fill-color: transparent;
  margin: 30px -10% 0 -10%;
  div {
    padding: 15px;
  }

  h5 {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 68px;
    font-weight: 300;
    line-height: 1.82;
    text-align: center;
  }
  h3 {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.33;
    text-align: center;
  }
`

export default About
