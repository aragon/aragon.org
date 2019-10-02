import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import Carousel from 'react-bootstrap/Carousel';
import prev from '../Home/home-assets/arrow-carousel-prev.svg';
import next from '../Home/home-assets/arrow-carousel-next.svg';
import yalda from './assets/yalda.png';
import olivier from './assets/olivier.png';
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
      <QuotesSection>
        <Container>
          <Carousel
            activeIndex={index}
            direction={direction}
            nextIcon={<img src={next} />}
            prevIcon={<img src={prev} />}
            onSelect={this.handleSelect}>
            <Carousel.Item>
              <Item>
                <img src={yalda} />
                <div>
                  <StyledBadge background="#AECAFF" foreground="#5770A0">
                    QUOTES
                  </StyledBadge>
                  <p>
                    Every time I scroll through @AragonProject's github repo for
                    Nest it makes me so inspired about the future. What is
                    happening here is next level and it will become even more
                    next level as more organizations cross-pollinate here.
                    Stoked to be in the Nest.
                  </p>
                  <p className="name">Yalda Mausavinia</p>
                </div>
              </Item>
            </Carousel.Item>
            <Carousel.Item>
              <Item>
                <img src={olivier} />
                <div>
                  <StyledBadge background="#AECAFF" foreground="#5770A0">
                    QUOTES
                  </StyledBadge>
                  <p>
                    Entering the Aragon Nest program is not (only) about getting
                    funded. It is about entering a community whose every member
                    is committed to help every others to pursue a common goal:
                    working toward the decentralization of human worlds.
                  </p>
                  <p className="name">Olivier Sarrouy</p>
                </div>
              </Item>
            </Carousel.Item>
          </Carousel>
        </Container>
      </QuotesSection>
    );
  }
}

const QuotesSection = styled(Section)`
  background-color: white;
  padding: 100px 15px 30px 15px;
  .container {
    padding: 0;
  }
`;
const Container = styled.div`
  img {
    max-width: 100%;
    ${medium('max-width: 60%;')}
    ${large('max-width: 42.6%;')}
    object-fit: cover;
  }
  .action-button {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .carousel-control-prev {
    left: -10%;

    ${medium('left: -15%;')}
  }
  .carousel-control-next,
  .carousel-control-prev {
    width: 10%;
    display: none;
    ${medium('width: 15%; display: flex;')}
  }
  .carousel-control-next {
    right: -10%;
    ${medium('right: -15%;')}
  }
  .carousel-indicators {
    display: none;
  }
`;

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
    margin: 30px 0;
  }
`;

export default Quotes;
