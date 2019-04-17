import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import {Link} from 'react-static';
import Fade from 'react-reveal/Fade';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('medium', css);

const feature1 = (
  <span>
    <p>
      A few years ago, could you ever imagine running a company from your phone?
 Vote, check finances and always be informed about your organizations.
      Anywhere, just a tap away.
    </p>
  </span>
);
const feature2 = (
  <span>
    <p>
      Thanks to the new App Center, you can seamlessly upgrade apps in your
      organization. Enhancements and security fixes constantly make your
      organization better.
    </p>
  </span>
);

const Features = () => (
  <StyledSection>
    <Container>
      <LongCard
        gradient="linear-gradient(335.08deg, #95BBCE -0.56%, #C5D0E6 46.04%, #E7E4F6 100%)"
        image={'Bella/assets/4.svg'}
        textAlign="right"
        label="new"
        bottom={true}
        title="Aragon goes mobile"
        content={feature1}
        className="first-feature"
      />
      <LongCard
        gradient="linear-gradient(24.28deg, #C3E4DF 0%, #EDFAF2 100.94%)"
        image={'Bella/assets/5.svg'}
        textAlign="right"
        label="new"
        title="Always evolving, constantly improving"
        content={feature2}
      />
    </Container>
  </StyledSection>
);

const StyledSection = styled(Section)`
  padding: 30px 15px 0 15px;
`
const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  .first-feature .image-container {
    ${medium('margin-bottom: -50px !important;')};
    img {
      height: auto;
      width: auto;
      ${large('height: 450px; width: 450px;')};
    }
  }
  .label {
    display: flex;
    background: #ffffff80;
    border-radius: 100px;
    height: 18px;
    align-items: center;
    p {
      padding: 0 15px;
      text-transform: uppercase;
      font-family: 'FontBold';
      font-size: 10px;
      color: #8fb5c8;
      height: auto;
      line-height: 1;
      margin-top: 2px;
    }
  }
`;

export default Features;
