import React from 'react'
import { PageTitle, Page } from '../components'
import { WhyAragon, Vision, Team } from '../components/About'

const About = () => (
  <Page path="/about">
    <PageTitle
      title="About us"
      subtitle="Fighting for the freedom to organize"
    />
    <WhyAragon />
    <Vision />
    <Team />
  </Page>
)

export default About
