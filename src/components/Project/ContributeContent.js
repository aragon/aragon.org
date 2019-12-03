import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import {breakpoint} from '@aragon/ui';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import aragonBlack from './assets/aragon-black.svg';
import aragonOne from './assets/aragon-one.svg';
import autark from './assets/autark.svg';

const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <span>
    <p>
      <FormattedMessage
        id="project.contribute.module1.content"
        defaultMessage="If you are a developer, you can get started on any of the multiple Aragon repositories. For a smooth start, we have a list of items where we need help."
      />
    </p>
    <p>
      <a
        className="action-button"
        href="https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+label%3A%22good+first+issue%22+user%3Aaragon+"
        target="_blank">
        <span>
          <FormattedMessage
            id="project.contribute.module1.action"
            defaultMessage="Good first issues"
          />
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </p>
  </span>
);
const mudule2Content = (
  <span>
    <p>
      <FormattedMessage
        id="project.contribute.module2.content"
        defaultMessage="We are looking for great people to expand the project. If you want to apply for a job, there are different positions open across multiple Aragon teams."
      />
    </p>
    <p>
      <a
        className="action-button"
        href="https://wiki.aragon.org/jobs"
        target="_blank">
        <span>
          <FormattedMessage
            id="project.contribute.module2.action"
            defaultMessage="Apply"
          />
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </p>
  </span>
);

const ContributeContent = () => (
  <ContributeSection>
    <Hero>
      <h3>
        <FormattedMessage
          id="project.contribute.ecosystem.title"
          defaultMessage="A thriving ecosystem"
        />
      </h3>
      <p>
        <FormattedMessage
          id="project.contribute.ecosystem.content"
          defaultMessage="Our vision is to decentralize Aragon’s development. There are different teams working on many parts of the project, but all aligned towards the same mission. The current teams are Aragon Black, Aragon One, and Autark."
        />
      </p>
    </Hero>
    <Decentralized>
      <div>
        <img src={aragonBlack} />
        <h3>Aragon Black</h3>
        <a href="https://www.aragon.black/" target="_blank">
          <span>
            <FormattedMessage
              id="project.contribute.ecosystem.action1"
              defaultMessage="Website"
            />{' '}
            <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
      <div>
        <img src={aragonOne} />
        <h3>Aragon One</h3>
        <a href="https://aragon.one" target="_blank">
          <span>
            <FormattedMessage
              id="project.contribute.ecosystem.action2"
              defaultMessage="Website"
            />{' '}
            <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
      <div>
        <img src={autark} />
        <h3>Autark</h3>
        <a href="https://www.autark.xyz/" target="_blank">
          <span>
            <FormattedMessage
              id="project.contribute.ecosystem.action3"
              defaultMessage="Website"
            />{' '}
            <img src={require(`../General/assets/arrow.svg`)} />
          </span>
        </a>
      </div>
    </Decentralized>
    <Container>
      <Card
        linkTo="https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+label%3A%22good+first+issue%22+user%3Aaragon+"
        imageUrl={'Project/assets/contribute1'}
        title={
          <FormattedMessage
            id="project.contribute.module1.title"
            defaultMessage="Help with open issues"
          />
        }
        content={mudule1Content}
        className="contribute1"
      />
      <Card
        linkTo="https://wiki.aragon.org/jobs"
        imageUrl={'Project/assets/contribute2'}
        title={
          <FormattedMessage
            id="project.contribute.module2.title"
            defaultMessage="Aragon teams are hiring"
          />
        }
        className="contribute2"
        content={mudule2Content}
      />
    </Container>
  </ContributeSection>
);

const ContributeSection = styled(Section)`
  padding: 30px 15px 90px 15px;
`;
const Hero = styled.div`
  margin-top: 40px;

  p {
    max-width: 550px;
    margin: 20px auto;
    text-align: center;
  }
  h3 {
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    letter-spacing: -0.564706px;
    color: #212b36;
    font-family: 'FontLight', sans-serif;
  }
`;
const Decentralized = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(33.33% - 15px) calc(33.33% - 15px) calc(33.33% - 15px); grid-template-rows: auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-bottom: 100px;
  ${medium('margin-bottom: 0;')}
  div {
    text-align: center;
    margin: 50px 0 0 0;
    ${medium('margin: 50px 0 100px 0;')}
  }
  h3 {
    font-size: 36px;
    line-height: 1.2;
    text-align: center;
    color: #2d4051;
    margin-top: 20px;
  }
  a {
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.315px;
    color: #4a80e4;
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
  img {
    height: 150px;
    width: 206px;
  }
  span img {
    width: auto;
  }
  .team-box {
    display: flex;
    span {
      margin-right: 50px;
    }
  }
  .contribute1 .principal-image {
    width: 224px;
    height: auto;
  }
  .contribute2 .principal-image {
    width: 238px;
    height: auto;
  }
`;

export default ContributeContent;
