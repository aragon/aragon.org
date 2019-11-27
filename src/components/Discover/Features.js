import React from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
import Section from '../General/Section';
import DividedSection from '../General/DividedSection';
import AlmostFullSection from '../General/AlmostFullSection';
import image1 from './assets/tokens.svg';
import image2 from './assets/fully-customizable.svg';
import image2Mobile from './assets/fully_customizable.svg';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Features = () => {
  const content = (
    <div>
      <h3>
        <FormattedHTMLMessage
          id="discover.features.feature2.title"
          defaultMessage='Fully <br /> <span className="blue">customizable</span>'
        />
      </h3>
      <p>
        <FormattedMessage
          id="discover.features.feature2.content"
          defaultMessage="With Aragon, you don’t need to pick a one-size-fits-all solution. You can experiment with new kinds of human collaboration, just with a few clicks."
        />
      </p>
    </div>
  );
  return (
    <Container>
      <DividedSection sectionClass="global" image={image1}>
        <h3>
          <FormattedHTMLMessage
            id="discover.features.feature1.title"
            defaultMessage='Global and <span className="red">bureaucracy-free</span>'
          />
        </h3>
        <p>
          <FormattedMessage
            id="discover.features.feature1.content"
            defaultMessage="Aragon organizations are global from day one. Collaborate with people across countries or continents, without experiencing cumbersome bureaucrazy."
          />
        </p>
      </DividedSection>
      <BreakPoint from="medium">
        <DividedSection
          image={image2}
          imageLeft={true}
          sectionClass="customizable">
          {content}
        </DividedSection>
      </BreakPoint>
      <BreakPoint to="medium">
        <DividedSection
          image={image2Mobile}
          imageLeft={true}
          sectionClass="customizable">
          {content}
        </DividedSection>
      </BreakPoint>
    </Container>
  );
};

const Container = styled.div`
  .red {
    color: #ff8979;
  }
  .customizable h3 {
    max-width: 368px;
  }
  .blue {
    background: -webkit-linear-gradient(69deg, #65aaff, #5d21d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .customizable .divided-section-container {
    ${medium('width: 39%;')};
  }
  img {
    ${medium('max-width: 110%;')};
  }
  section {
    padding-bottom: 0;
  }
  .customizable img {
    ${medium('margin-right: 76px;')};
  }
  .customizable {
    padding: 0px;
  }
  .global h3 {
    margin-top: 0 !important;
  }
  .global img {
    width: 80%;
    margin-left: 20%;
  }
`;
export default Features;
