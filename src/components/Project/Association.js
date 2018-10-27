import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import aragonImage from './assets/association.svg'

import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)


const UnstoppableOrganizations = () => (
  <Association>
    <Box>
      <Container>
        <Image src={aragonImage}/>
      </Container>
      <Container>
        <h2>The Aragon <br/>Association</h2>
        <h4>The Aragon Project is stewarded by the Aragon Association, a Swiss non-profit entity.</h4>
        <br/><h4>Board of directors</h4>
        <h4>Luis Cuende and Jorge Izquierdo</h4>
      </Container>
    </Box>
  </Association>
);

const Association = styled(Section)`
  background-color: #1c1d23;
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 100%;
  margin: 15px 0;
  text-align: center;
  margin: auto;
  ${medium('text-align: left; margin: inherit;')};
  h2 {
    text-align: center;
    ${medium('text-align: left;')};
    color: white;
    line-height: 1.2;
  }
  h4 {
    text-align: center;
    ${medium('text-align: left;')};
    color: #b4b5cc;
  }
`;
const Image = styled.img`
  max-width: 100%
`;

export default UnstoppableOrganizations
