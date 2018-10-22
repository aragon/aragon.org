import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'


const Card = () => (
  <LongCard></LongCard>
);

const LongCard = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
`

export default Card
