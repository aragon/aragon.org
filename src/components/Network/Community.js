import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import background from './assets/protocols.png'

const Community = () => (
  <Section>
    <div>
      <h2>
        <FormattedMessage
          id="network.community.title"
          defaultMessage="Aragon Network Protocols"
        />
      </h2>
      <h4>
        <FormattedMessage
          id="network.community.subtitle"
          defaultMessage="The Aragon Network provides essential services to DAOs via decentralized protocols"
        />
      </h4>
    </div>
  </Section>
)

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
`
export default Community
