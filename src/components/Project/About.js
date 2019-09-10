import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import history from './assets/history.svg';
import {Link} from 'react-static';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
import AlmostFullSection from '../General/AlmostFullSection';
import image from './assets/project-governance.png';
const mudule1Content = (
  <span>
    <p>
      Aragon is creating a whole stack of decentralized technologies that merge
      seamlessly inside people’s everyday. Aragon Nest helps bring it to
      reality.
    </p>
    <p>
      <Link className="action-button" to="/project/grants">
        <span>
          Discover Nest <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </Link>
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>
      Our community is always looking for individuals who want to help our fight
      for freedom. Check out how to contribute or check open positions.
    </p>
    <p>
      <Link className="action-button" to="/project/contribute">
        <span>
          Contribute <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </Link>
    </p>
  </span>
);
const module3Content = (
  <p>
    The Aragon Project was born to disintermediate the creation and maintenance
    of organizations. Everyone should have equal access to governance and
    collaboration, no matter of their race, gender or age. The project was
    originally started by Luis Cuende and Jorge Izquierdo in November 2016.
  </p>
);

const About = () => (
  <div>
    <Section>
      <History>
        <div>
          <h3>Our history</h3>
          <p>
            The Aragon Project was born to disintermediate the creation and
            maintenance of organizations. Everyone should have equal access to
            governance and collaboration, no matter of their race, gender or
            age.
          </p>
          <p>
            The project was originally started by Luis Cuende and Jorge
            Izquierdo in November 2016.
          </p>
          <Link className="action-button" to="/project/roadmap">
            <span>
              View roadmap <img src={require(`../General/assets/arrow.svg`)} />
            </span>
          </Link>
        </div>
        <img src={history} />
      </History>
    </Section>

    <AlmostFullSection backgroundColor="#639CF5" image={image} imageLeft={true}>
      <AlmostFullSectionBox>
        <h3>Governed by the community</h3>
        <p>
          The Aragon project has a strong commitment to decentralize its own
          existence. The community will have control over its future.
        </p>
        <a href="https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/">Manifesto</a>
      </AlmostFullSectionBox>
    </AlmostFullSection>
    <AboutSection>
      <Container>
        <Card
          linkTo="/project/grants"
          imageUrl={'Project/assets/project1'}
          title="Nest, our grants program"
          content={mudule1Content}
        />
        <Card
          linkTo="/project/contribute"
          imageUrl={'Project/assets/project2'}
          title={
            <span>
              Join
              <br /> the fight
            </span>
          }
          content={mudule2Content}
        />
      </Container>
    </AboutSection>
  </div>
);

const AlmostFullSectionBox = styled.div`
  h3 {
    font-family: 'FontRegular', sans-serif;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #ffffff !important;
  }
  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
    opacity: 0.8;
  }
  a {
    font-family: 'FontSemiBold';
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
  }
`;
const History = styled.div`
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  div {
    ${medium('width: 594px;')};
  }
  h3 {
    font-family: 'FontLight', sans-serif;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #212b36;
  }
  p {
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #637381;
    max-width: 100%;
    ${medium('max-width: 445px;')};
    margin: 25px 0;
  }
`;

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 650px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const AboutSection = styled(Section)`
  padding: 90px 15px;
`
export default About;
