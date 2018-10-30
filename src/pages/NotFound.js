import React from 'react'
import { Page } from '../components'
import styled from 'styled-components'
import Section from '../components/General/Section'

const NotFound = () => (
  <Page>
  	<NotFoundSection>
    <h2>Not Found</h2>
    <h4>The page you are trying to access could not be found.</h4>
    </NotFoundSection>
  </Page>
)

const NotFoundSection = styled(Section)`
	height: 90vh;
	display: flex;
	align-items: center;
	justyfy-content: center;
`
export default NotFound
