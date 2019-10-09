import React from 'react';
import Section from '../General/Section';
import SmallCard from '../General/SmallCard';
import styled from 'styled-components';
import {Link} from 'react-static';
import image1 from './assets/about1.svg';
import image2 from './assets/about2.svg';
import image3 from './assets/about3.svg';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const About = () => (
  <AboutSection>
    <Container>
      <div>
        <img src={image1} />
        <h1>Fundraise globally</h1>
        <p>Raise funds from supporters all over the world in minutes.</p>
      </div>
      <div>
        <img src={image2} />
        <h1>Succeed transparently</h1>
        <p>Be rewarded by supporters for your organization's success.</p>
      </div>
      <div>
        <img src={image3} />
        <h1>Protect your reputation</h1>
        <p>Avoid the risks & pitfalls of traditional crowdfunding.</p>
      </div>
    </Container>
  </AboutSection>
);

const AboutSection = styled(Section)`
  padding: 114px 15px;
  z-index: 3;
  background: white;
`;
const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(33.33% - 15px) calc(33.33% - 15px) calc(33.33% - 15px); grid-template-rows: auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  p {
    font-size: 21px;
    line-height: 35px;
    color: #6d7693;
  }
  h1 {
    font-family: 'FontSemiBold';
    font-weight: 600;
    font-size: 21px;
    line-height: 35px;
    color: #212b36;
  }
  img {
    margin-bottom: 33px;
  }
`;

export default About;
