import React from 'react';
import styled from 'styled-components';
import {Badge} from '@aragon/ui';
import Carousel from 'react-bootstrap/Carousel';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const CarouselItem = ({image, children}) => (
  <Carousel.Item>
    <Item>
      <img src={image} />
      <div>{children}</div>
    </Item>
  </Carousel.Item>
);

const UseCasesBadge = styled(Badge)`
  background: #c4e5df80 !important;
  color: #459d85 !important;
  padding: 1px 15px 0 !important;
  line-height: 2 !important;
`;

const Item = styled.div`
  background: #f9fafc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0726053);
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  div {
    padding: 20px;
    ${medium('padding: 60px;')};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  img {
    max-height: 534px;
    max-width: 100%;
  }
  h2 {
    font-family: 'FontMedium';
    font-size: 37px;
    ${medium('font-size: 46px;')};
    line-height: 1.28;
    letter-spacing: -0.564706px;
    color: #212b36;
    text-align: left;
  }

  p {
    font-family: 'FontRegular';
    font-size: 21px;
    text-align: left;
    line-height: 35px;
    max-width: 500px;
    color: #6d7693;
    margin-bottom: 65px;
  }
`;

export default CarouselItem;
