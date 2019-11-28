import React from 'react';
import styled from 'styled-components';
import background from './assets/protocols.png';

const Community = () => (
  <Section>
    <div>
      <h2>Aragon Network Protocols</h2>
      <h4>The Aragon Network earns revenues by running for-profit protocols</h4>
    </div>
  </Section>
);

const Section = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  tex-align: center;
  h4 {
    max-width: 515px;
    margin: auto;
  }
`;
export default Community;
