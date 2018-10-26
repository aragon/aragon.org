import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import styled from 'styled-components'
import { Link } from 'react-static'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <span>
    <p>Aragon represents a new chapter in the history of society. Read more on why decentralized organizations can solve the world’s worst problems, with the example of Maria.</p>
    <p><a href="https://blog.aragon.org/decentralized-organizations-can-solve-the-worlds-worst-problems-840db6255d12/" target="_blank" className="action-button">Read more ></a></p>
  </span>
  );
const About = () => (
  <Section>
    <Container>
      <LongCard background={'Discover/assets/background-discover3.png'} colorWhite textAlign="left" title="Freeing the Marias of the world" content={mudule1Content}></LongCard>
      <LongCard background={'Discover/assets/background-discover4.png'} colorWhite textAlign="center" title="Reclaim your freedom now"></LongCard>
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

export default About
