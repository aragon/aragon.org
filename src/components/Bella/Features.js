import React from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-static';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const feature1 = (
  <span>
    <p>
      <FormattedMessage
        id="bella.features.feature1.content"
        defaultMessage="Click on any address to assign it a name. Then you will always see that name across all Aragon apps. You can export your names and send them to other people in your organization."
      />
    </p>
  </span>
);
const feature2 = (
  <span>
    <p>
      <FormattedMessage
        id="bella.features.feature2.content"
        defaultMessage="The activity center keeps you informed about the status of your pending transactions."
      />
    </p>
  </span>
);
const feature3 = (
  <span>
    <p>
      <FormattedMessage
        id="bella.features.feature3.content"
        defaultMessage="Add an employee, their salary and tokens allowed to withdraw. That’s it. For real. Employees get their payroll whenever they prefer. Weekly? Daily? In real time? It’s up to them now."
      />
    </p>
  </span>
);

const Features = () => (
  <Section id="features">
    <Container>
      <LongCard
        background={'Bella/assets/background-1.png'}
        image={'Bella/assets/1.svg'}
        textAlign="right"
        label="new"
        title={
          <FormattedMessage
            id="bella.features.feature1.title"
            defaultMessage="Call people by their name"
          />
        }
        content={feature1}
      />

      <LongCard
        background={'Bella/assets/background-2.png'}
        image={'Bella/assets/2.svg'}
        label="new"
        textAlign="left"
        title={
          <FormattedHTMLMessage
            id="bella.features.feature2.title"
            defaultMessage="<span>Get activity<br /> notifications</span>"
          />
        }
        content={feature2}
      />

      <LongCard
        background={'Bella/assets/background-3.png'}
        image={'Bella/assets/3.svg'}
        textAlign="right"
        className="salary-allocation"
        label="invite-only"
        title={
          <FormattedMessage
            id="bella.features.feature3.title"
            defaultMessage="The easiest payroll ever made"
          />
        }
        content={feature3}
      />
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px 500px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  .salary-allocation {
    img {
      margin: 50px;
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
