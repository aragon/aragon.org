import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import CarouselItem from '../General/CarouselItem';
import yalda from './assets/yalda.png';
import {breakpoint, Badge} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Quotes = () => (
  <QuoteSection>
    <CarouselItem image={yalda}>
      <Badge background="#AECAFF" foreground="#5770A0">QUOTES</Badge>
      <p>
        Every time I scroll through @AragonProject's github repo for Nest it
        makes me so inspired about the future. What is happening here is next
        level and it will become even more next level as more organizations
        cross-pollinate here. Stoked to be in the Nest.
      </p>
      <p className="name">
        Yalda Mausavinia
      </p>
    </CarouselItem>
  </QuoteSection>
);

const QuoteSection = styled(Section)`
  background: white;
  padding: 0 15px 90px 15px;
  img {
    max-height: 483px;
  }
  p {
    font-family: 'FontRegular';
    font-size: 27px;
    line-height: 38px;
    color: #2D4051;
    margin: 20px 0;
  }
  p.name {
    font-family: 'FontSemiBold';
    font-size: 18px;
    line-height: 38px;
    color: #6D7693;
    margin: 0;
  }
`;

export default Quotes;
