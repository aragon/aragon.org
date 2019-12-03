import React from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styled from 'styled-components';
import {breakpoint} from '@aragon/ui';
import Section from '../General/Section';
import Label from './Label';
import Feature from '../General/DividedSection';
import image5 from './assets/image5b.png';
import image6 from './assets/image6.png';
import image7 from './assets/notifications.svg';
import label1 from './assets/label-voting.svg';
import label2 from './assets/label-finance.svg';
import label3 from './assets/label-notifications.svg';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('medium', css);

const MoreFeatures = () => (
  <Container>
    <Feature image={image5} imageLeft={true} sectionClass="feature">
      <h3 className="voting">
        <FormattedHTMLMessage
          id="camino.more-features.feature1.title"
          defaultMessage="Enhanced <br /><span class='green'>voting transparency</span>"
        />
      </h3>
      <p>
        <FormattedMessage
          id="camino.more-features.feature1.content"
          defaultMessage="The voting app has been redesigned to make governance more accessible. Easily find and understand the details of a vote."
        />
      </p>
      <Label title="Voting" image={label1} />
    </Feature>
    <Feature image={image6} sectionClass="feature">
      <h3 className="finance">
        <FormattedHTMLMessage
          id="camino.more-features.feature2.title"
          defaultMessage="Better <br /><span class='blue'>financial visibility</span>"
        />
      </h3>
      <p>
        <FormattedMessage
          id="camino.more-features.feature2.content"
          defaultMessage="View and sort your organization’s finances for greater clarity and insight. Now with more powerful filters."
        />
      </p>
      <Label title="Finance" image={label2} />
    </Feature>
    <Feature
      image={image7}
      imageLeft={true}
      sectionClass="feature notifications">
      <h3 className="mailing">
        <FormattedHTMLMessage
          id="camino.more-features.feature3.title"
          defaultMessage="Stay up to date with <span class='red'>email notifications</span>"
        />
      </h3>
      <p>
        <FormattedMessage
          id="camino.more-features.feature3.content"
          defaultMessage="Whether it's a new vote, finance transfer, or permissions change, subscribe to the events that matter to you."
        />
      </p>
      <Label title="notifications" image={label3} />
    </Feature>
  </Container>
);

const Container = styled.div`
  .divided-section-image {
    ${medium('max-width: calc(100% + 200px) !important;')};
  }
  .red {
    color: #fb7777;
  }
  .blue {
    background: -webkit-linear-gradient(69deg, #46c4e6, #4a80e4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .green {
    background: -webkit-linear-gradient(69deg, #a8ed2f, #68dfb1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .feature {
    ${medium('padding: 0 120px !important;')};
  }
  .notifications .divided-section-image {
    ${medium('width: calc(100% + 100px); padding-right: 100px;')};
  }
  h3.finance {
    max-width: 500px;
  }
  h3.voting,
  h3.mailing {
    max-width: 369px;
  }
`;
export default MoreFeatures;
