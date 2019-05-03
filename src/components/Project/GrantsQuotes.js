import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import Quote from '../General/Quote';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Quotes = () => (
  <QuoteSection>
    <Quote
      image={'Project/assets/yalda_sola.png'}
      background={'Project/assets/quote-bg1.jpg'}
      title="Yalda Mousavinia"
      imageRight={false}
      content="Every time I scroll through @AragonProject's github repo for Nest it makes me so inspired about the future. What is happening here is next level and it will become even more next level as more organizations cross-pollinate here. Stoked to be in the Nest."
    />
    <Quote
      image={'Project/assets/oliver_solo.png'}
      background={'Project/assets/quote-bg2.jpg'}
      title="Olivier Sarrouy"
      imageRight={true}
      content="Entering the Aragon Nest program is not (only) about getting funded. It is about entering a community whose every member is committed to help every others to pursue a common goal: working toward the decentralization of human worlds."
    />
  </QuoteSection>
);

const QuoteSection = styled.section`
  background: white;
  p.link,
  a.hero-link {
    text-align: center;
    margin-bottom: 30px;
    color: #1eb8d1;
  }
`;


export default Quotes;
