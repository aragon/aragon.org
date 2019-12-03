import React from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styled from 'styled-components';
import {Link} from 'react-static';
import {breakpoint} from '@aragon/ui';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import AlmostFullSection from '../General/AlmostFullSection';
import image from './assets/project-governance.png';
import history from './assets/history.svg';

const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <span>
    <p>
      <FormattedMessage
        id="project.home.about.module1.content"
        defaultMessage="Aragon is creating a whole stack of decentralized technologies that merge seamlessly with people’s everyday work. Aragon Nest helps bring it to reality."
      />
    </p>
    <p>
      <Link className="action-button" to="/project/grants">
        <span>
          <FormattedMessage
            id="project.home.about.module1.action"
            defaultMessage="Discover Nest"
          />
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </Link>
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>
      <FormattedMessage
        id="project.home.about.module2.content"
        defaultMessage="Our community is always looking for individuals who want to help our fight for freedom. Check out how to contribute or check open positions."
      />
    </p>
    <p>
      <Link className="action-button" to="/project/contribute">
        <span>
          <FormattedMessage
            id="project.home.about.module2.action"
            defaultMessage="Contribute"
          />
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </Link>
    </p>
  </span>
);

const About = () => (
  <div>
    <Section>
      <History>
        <div>
          <h3>
            <FormattedMessage
              id="project.home.about.history.title"
              defaultMessage="Our history"
            />
          </h3>
          <p>
            <FormattedMessage
              id="project.home.about.history.content"
              defaultMessage="The Aragon project was founded to disintermediate the creation and maintenance of organizations. We believe everyone should have equal access to governance and collaboration, no matter their age, gender, or race."
            />
          </p>
          <p>
            <FormattedMessage
              id="project.home.about.history.content2"
              defaultMessage="The project was originally started by Luis Cuende and Jorge Izquierdo in November 2016."
            />
          </p>
          <Link className="action-button" to="/project/roadmap">
            <span>
              <FormattedMessage
                id="project.home.about.history.action"
                defaultMessage="View roadmap"
              />
              <img src={require(`../General/assets/arrow.svg`)} />
            </span>
          </Link>
        </div>
        <img src={history} />
      </History>
    </Section>

    <AlmostFullSection backgroundColor="#639CF5" image={image} imageLeft={true}>
      <AlmostFullSectionBox>
        <h3>
          <FormattedMessage
            id="project.home.about.governance.title"
            defaultMessage="Governed by the community"
          />
        </h3>
        <p>
          <FormattedMessage
            id="project.home.about.governance.content"
            defaultMessage="The Aragon project has a strong commitment to decentralize its own existence. The community now has control over its own future."
          />
        </p>
        <a href="https://aragon.org/project/governance">
          <FormattedMessage
            id="project.home.about.governance.action"
            defaultMessage="About Aragon governance"
          />
        </a>
      </AlmostFullSectionBox>
    </AlmostFullSection>
    <AboutSection>
      <Container>
        <Card
          linkTo="/project/grants"
          imageUrl={'Project/assets/project1'}
          title={
            <FormattedMessage
              id="project.home.about.module1.title"
              defaultMessage="Nest, our grants program"
            />
          }
          content={mudule1Content}
        />
        <Card
          linkTo="/project/contribute"
          imageUrl={'Project/assets/project2'}
          title={
            <FormattedHTMLMessage
              id="project.home.about.module2.title"
              defaultMessage="<span>Join<br /> the fight</span>"
            />
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
  img {
    width: 100%;
    margin: 30px 0;
    ${medium('margin: 0; width: auto;')};
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
  .principal-image {
    margin-bottom: 0;
    width: auto;
  }
`;
export default About;
