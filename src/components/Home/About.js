import React from 'react';
import Section from '../General/Section';
import SmallCard from '../General/SmallCard';
import styled from 'styled-components';
import {Link} from 'react-static';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <span>
    <p>
      The Internet has no borders and organizations shouldn't have them either.
      Govern organizations with the same ease that you send a tweet.
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>
      Create your own organization in under five minutes. No paperwork involved.
      We know one-size doesn't fit all, so you can customize your organization.
    </p>
  </span>
);
const mudule3Content = (
  <span>
    <p>
      We believe human organization is a basic human right. Aragon organizations
      are sovereign and censorship-resistant. Plus Aragon itself is open source
      software.
    </p>
  </span>
);

const About = () => (
  <AboutSection>
    <Container>
      <SmallCard
        linkTo="/project"
        imageUrl={'Home/home-assets/global'}
        title="Global by default"
        content={mudule1Content}
      />
      <SmallCard
        linkTo="https://hack.aragon.org/"
        imageUrl={'Home/home-assets/fast'}
        title="Fast and easy"
        content={mudule2Content}
      />
      <SmallCard
        linkTo="/project/contribute"
        imageUrl={'Home/home-assets/truly'}
        title="Truly sovereign"
        content={mudule3Content}
      />
    </Container>
  </AboutSection>
);

const AboutSection = styled(Section)`
  padding: 0 15px 30px 15px;
  margin-top: -207px;
  z-index: 3;
`
const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(33.33% - 15px) calc(33.33% - 15px) calc(33.33% - 15px); grid-template-rows: auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  p.discover {
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    margin-bottom: 15px;
    ${medium('margin-bottom: 35px;')};
    color: #ffffff;
  }
`;

export default About;
