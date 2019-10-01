import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import CarouselItem from '../General/CarouselItem';
import Carousel from 'react-bootstrap/Carousel';
import prev from '../Home/home-assets/arrow-carousel-prev.svg';
import next from '../Home/home-assets/arrow-carousel-next.svg';
import yalda from './assets/yalda.png';
import {breakpoint, Badge} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Quotes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  render() {
    const {index, direction} = this.state;
    return (
      <QuoteSection>
        <Carousel
          activeIndex={index}
          direction={direction}
          nextIcon={<img src={next} />}
          prevIcon={<img src={prev} />}
          onSelect={this.handleSelect}>
          <CarouselItem image={yalda}>
            <StyledBadge background="#AECAFF" foreground="#5770A0">
              QUOTES
            </StyledBadge>
            <p>
              Every time I scroll through @AragonProject's github repo for Nest
              it makes me so inspired about the future. What is happening here
              is next level and it will become even more next level as more
              organizations cross-pollinate here. Stoked to be in the Nest.
            </p>
            <p className="name">Yalda Mausavinia</p>
          </CarouselItem>
          <CarouselItem image={yalda}>
            <StyledBadge background="#AECAFF" foreground="#5770A0">
              QUOTES
            </StyledBadge>
            <p>
              segunda I scroll through @AragonProject's github repo for Nest it
              makes me so inspired about the future. What is happening here is
              next level and it will become even more next level as more
              organizations cross-pollinate here. Stoked to be in the Nest.
            </p>
            <p className="name">Yalda Mausavinia</p>
          </CarouselItem>
        </Carousel>
      </QuoteSection>
    );
  }
}

const StyledBadge = styled(Badge)`
  padding: 3px 17px 1px;
`;
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
    color: #2d4051;
    margin: 20px 0;
  }
  p.name {
    font-family: 'FontSemiBold';
    font-size: 18px;
    line-height: 38px;
    color: #6d7693;
    margin: 0;
  }
`;

export default Quotes;
