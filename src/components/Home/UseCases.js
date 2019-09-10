import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import blankDAO from './home-assets/usecases/blankDAO.png';
import aragonNetwork from './home-assets/usecases/aragon-network.png';
import melon from './home-assets/usecases/melon.png';
import pool from './home-assets/usecases/pool.png';
import hive from './home-assets/usecases/1hive.png';
import prev from './home-assets/arrow-carousel-prev.svg';
import next from './home-assets/arrow-carousel-next.svg';
import {Badge} from '@aragon/ui';
import Carousel from 'react-bootstrap/Carousel';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class UseCases extends React.Component {
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
      <UseCasesSection>
        <Container>
          <Carousel
            activeIndex={index}
            direction={direction}
            nextIcon={<img src={next} />}
            prevIcon={<img src={prev} />}
            onSelect={this.handleSelect}>
            <Carousel.Item>
              <UseCase>
                <img src={aragonNetwork} />
                <div>
                  <UseCasesBadge>USE CASE</UseCasesBadge>
                  <h2>
                    Aragon Network: A digital jurisdiction{' '}
                    <span role="img" aria-label="glow">
                      🦅
                    </span>
                  </h2>
                  <p>
                    See how Aragon is used to govern the Aragon project itself,
                    from funds management to policy changes and more. <br/>
                    <a
                      target="_blank"
                      className="action-button"
                      href="https://mainnet.aragon.org/#/governance.aragonproject.eth/">
                      {' '}
                      Go to Aragon Governance
                    </a>{' '}
                  </p>

                  <a
                    className="secondary-button"
                    target="_blank"
                    href="https://github.com/aragon/AGPs/blob/master/AGPs/AGP-1.md">
                    How the Aragon Network uses Aragon
                  </a>
                </div>
              </UseCase>
            </Carousel.Item>
            <Carousel.Item>
              <UseCase>
                <img src={blankDAO} />
                <div>
                  <UseCasesBadge>USE CASE</UseCasesBadge>
                  <h2>
                    BlankDAO: From Iran to the world{' '}
                    <span role="img" aria-label="glow">
                      ✨
                    </span>
                  </h2>
                  <p>
                    See how Aragon enabled a group of talented developers from
                    Iran and other countries to raise funds transparently from
                    their community. <br/>
                    <a
                      target="_blank"
                      className="action-button"
                      href="https://mainnet.aragon.org/#/blankdao.aragonid.eth/">
                      {' '}
                      Go to BlankDAO
                    </a>
                  </p>

                  <a
                    className="secondary-button"
                    target="_blank"
                    href="https://docs.google.com/document/d/1mAGAZ5TAbJoTJoNCAwMUKLhEHD-WW-tzc0dHhbsl1gU/edit">
                    How BlankDAO uses Aragon
                  </a>
                </div>
              </UseCase>
            </Carousel.Item>
            <Carousel.Item>
              <UseCase>
                <img src={melon} />
                <div>
                  <UseCasesBadge>USE CASE</UseCasesBadge>
                  <h2>
                    Melon: Disintermediating asset management{' '}
                    <span role="img" aria-label="glow">
                      📊
                    </span>{' '}
                  </h2>
                  <p>
                    See how Aragon is used to manage council membership,
                    contract upgrades, ENS subdomains, and network parameters
                    for an on-chain asset management protocol.
                    <a
                      target="_blank"
                      className="action-button"
                      href="https://aragon.mainnet.aragonpm.com/#/0xfe1f2de598f42ce67bb9aad5ad473f0272d09b74/0x3d5f4417b7fb63aaf3b2aa23fc227e3ddebb951b">
                      {' '}
                      Go to Melon Council
                    </a>
                  </p>

                  <a
                    className="secondary-button"
                    target="_blank"
                    href="https://medium.com/melonprotocol/launching-the-melon-council-dao-on-aragonos-42147c86582">
                    How Melon Council uses Aragon
                  </a>
                </div>
              </UseCase>
            </Carousel.Item>
            <Carousel.Item>
              <UseCase>
                <img src={pool} />
                <div>
                  <UseCasesBadge>USE CASE</UseCasesBadge>
                  <h2>
                    Pool Together: A lottery you can’t lose{' '}
                    <span role="img" aria-label="glow">
                      🎲
                    </span>
                  </h2>
                  <p>
                    See how Aragon is used to transparently manage group funds
                    among a dapp development team. <br/>
                    <a
                      target="_blank"
                      className="action-button"
                      href="https://mainnet.aragon.org/#/pooltogether/0x7e3797a24114afcfd09e953cda490d81863ec32f">
                      {' '}
                      Go to Pool Together
                    </a>
                  </p>

                  <a
                    className="secondary-button"
                    target="_blank"
                    href="https://twitter.com/PoolTogether_/status/1143129765047656448">
                    How Pool Together uses Aragon
                  </a>
                </div>
              </UseCase>
            </Carousel.Item>
            <Carousel.Item>
              <UseCase>
                <img src={hive} />
                <div>
                  <UseCasesBadge>USE CASE</UseCasesBadge>
                  <h2>
                    1Hive: Growing open source commons{' '}
                    <span role="img" aria-label="glow">
                      🐝
                    </span>
                  </h2>
                  <p>
                    See how Aragon helps to coordinate and reward maintainers
                    and contributors in an open source community. <br/>
                    <a
                      target="_blank"
                      className="action-button"
                      href="https://rinkeby.aragon.org/#/0xe520428C232F6Da6f694b121181f907931fD2211/0xc2555abaed3797b52248e814172d2bea6728e542">
                      {' '}
                      Go to 1Hive
                    </a>
                  </p>
                  <a
                    className="secondary-button"
                    target="_blank"
                    href="https://1hive.org/contribute/membership">
                    How 1Hive uses Aragon
                  </a>
                </div>
              </UseCase>
            </Carousel.Item>
          </Carousel>
        </Container>
      </UseCasesSection>
    );
  }
}
const UseCasesBadge = styled(Badge)`
  background: #c4e5df80 !important;
  color: #459d85 !important;
  padding: 1px 15px 0 !important;
  line-height: 2 !important;
  margin-bottom: 30px;
`;
const UseCasesSection = styled(Section)`
  background-color: white;
  padding: 100px 15px 30px 15px;
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
const UseCase = styled.div`
  background: #f9fafc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0726053);
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  ${medium('flex-direction: row; min-height: 610px; margin: 20px;')};
  div {
    padding: 20px;
    ${large('padding: 50px;')};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  h2 {
    font-family: 'FontLight', sans-serif;
    font-size: 37px;
    ${medium('font-size: 46px;')};
    line-height: 1.28;
    letter-spacing: -0.564706px;
    color: #212b36;
    text-align: left;
  }

  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    text-align: left;
    line-height: 35px;
    max-width: 500px;
    color: #6d7693;
    margin-bottom: 65px;
  }
  a.action-button {
    display: inline;
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    line-height: 35px;
  }
  a.secondary-button {
    line-height: 1.5;
    text-align: center;
  }
`;
export default UseCases;
