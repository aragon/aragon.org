import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>If you are a developer, you can get started on any of the multiple Aragon repositories. For a smooth start, we have a list of items where we need help.</p>);
const mudule2Content = (<p>We are looking for great people to expand the project. If you want to apply for a job, there are different positions open across multiple Aragon teams.</p>);
const mudule3Content = (<p>Our vision is to decentralize Aragon’s development. There are different teams working on many parts of the project, but all aligned towards the same mission. The current teams are Aragon One and Aragon DAC.</p>);

const ContributeContent = () => (
  <Section>
    <Container>
      <LongCard textAlign="left" background={'Project/assets/contribute-background1.png'} content={mudule3Content} image={'Project/assets/contribute3.svg'} colorWhite title="Multiple teams"></LongCard>
      <Card imageUrl={'Project/assets/contribute1'} title="Help with open issues" content={mudule1Content}></Card>
      <Card imageUrl={'Project/assets/contribute2'} title="Aragon teams are hiring" content={mudule2Content}></Card>
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

export default ContributeContent
