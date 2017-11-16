import React from 'react'

import { PageTitle } from '../components'

import {
  WhyAragon,
  Vision,
  Team,
} from '../components/About'

const About = () => (
  <div>
    <PageTitle title="About us" subtitle="Taking back the freedom for humans to organize" />
    <WhyAragon />
    <Vision />
    <Team />
  </div>
)

export default About
