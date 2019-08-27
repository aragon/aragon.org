import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
import CountUp from 'react-countup';

const mudule1Content = (
  <span>
    <p>
      Aragon Nest is run in the open. We want to remain transparent to our
      community and the grant applicants. Everything going on in Nest is
      reflected in GitHub.
    </p>
    <p>
      <a
        className="action-button"
        href="https://github.com/aragon/nest"
        target="_blank">
        <span>
          Nest in GitHub <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>
      We are looking for people that want to help the Aragon and Ethereum
      ecosystems advance. If you believe you have a proposal for the program,
      read more and apply.
    </p>
    <p>
      <a
        className="action-button"
        href="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant"
        target="_blank">
        <span>
          Apply <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </p>
  </span>
);

class GrantsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {one: '', two: '', three: '', four: ''};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);

    var element = document.getElementById('numbersAnimation');
    var elem =
      element.getBoundingClientRect().top + document.documentElement.scrollTop;
    if ((elem - window.innerHeight - 24) <= 0) {
      this.setState({
        one: <CountUp end={1.5} duration={2} decimals={1} />,
        two: <CountUp end={15} duration={2} />,
        three: <CountUp end={60} duration={2} />,
        four: <CountUp end={120} duration={2} />,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    var element = document.getElementById('numbersAnimation');
    var elem =
      element.getBoundingClientRect().top + document.documentElement.scrollTop;

    if (scrolled >= (elem - window.innerHeight - 24)) {
      this.setState({
        one: <CountUp end={1.5} duration={2} decimals={1} />,
        two: <CountUp end={15} duration={2} />,
        three: <CountUp end={60} duration={2} />,
        four: <CountUp end={120} duration={2} />,
      });
    }
  };

  render() {
    const {four} = this.state;
    return (
      <Section>
        <Container>
          <LongCard
            textAlign="center"
            color="#b4b5cc"
            gradient="radial-gradient(circle at 99% 100%, transparent, transparent)"
            title="A thriving ecosystem"
            className="numbers" >
            <LongCardContainer>
              <div>
                <h5 className="one">${this.state.one}</h5>
                <h3 className="one" id="numbersAnimation">Millions given away in grants</h3>
              </div>
              <div>
                <h5 className="two">{this.state.two}</h5>
                <h3 className="two">Teams working together</h3>
              </div>
              <div>
                <h5 className="three">{this.state.three}</h5>
                <h3 className="three">People making their dreams possible</h3>
              </div>
              <div>
                <h5 className="four">{this.state.four}</h5>
                <h3 className="four">Applications to the program</h3>
              </div>
            </LongCardContainer>
          </LongCard>
          <Card
            linkTo="https://github.com/aragon/nest"
            imageUrl={'Project/assets/grants1'}
            title="Fully transparent"
            content={mudule1Content}
            className="transparent"
          />
          <Card
            linkTo="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant"
            imageUrl={'Project/assets/grants2'}
            title="Apply now"
            content={mudule2Content}
            className="apply-card"
          />
        </Container>
      </Section>
    );
  }
}

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  .apply-card .principal-image {
    height: 152px;
    width: 216px;
  }
  .transparent .principal-image {
    margin-bottom: 14px;
  }
  .numbers {
    background: white;
    box-shadow: 0 0 rgb(255, 255, 255);
  }
`;

const LongCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${medium('flex-wrap: nowrap;')};
  color: white;
  margin: 30px -10% 0 -10%;
  div {
    padding: 15px;
  }

  h5 {
    font-family: 'FontLight', sans-serif;
    font-size: 68px;
    font-weight: 300;
    line-height: 1.82;
    text-align: center;
    min-height: 123px;
    background-image: -webkit-linear-gradient(119deg, #faf9f4, #2c86d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    line-height: 1.4;
    text-align: center;
    letter-spacing: 0.315px;
    color: #637381;
  }

  h5.one {
    background-image: -webkit-linear-gradient(119deg, #FFBB70, #FF4E78);
  }

  h5.two {
    background-image: -webkit-linear-gradient(119deg, #FFBB70, #FF4E78);
  }

  h5.three {
    background-image: -webkit-linear-gradient(119deg, #FFBB70, #FF4E78);
  }

  h5.four {
    background-image: -webkit-linear-gradient(119deg, #FFBB70, #FF4E78);
  }
`;

export default GrantsContent;
