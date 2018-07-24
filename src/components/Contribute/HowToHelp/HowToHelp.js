import React from 'react'
import styled, { css } from 'styled-components'
import { Text, themeDark, breakpoint } from '@aragon/ui'
import { Section } from '@aragon/web'
import { SectionTitle, Anchor } from '../../'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import background from './assets/background.svg'
import logo from './assets/logo.svg'
import buildEcosystem from './assets/build-ecosystem.svg'
import deepWorkSessions from './assets/deep-work-sessions.svg'
import fullyDistributed from './assets/fully-distributed.svg'
import technologyCompany from './assets/technology-company.svg'

const TITLE = 'Ways to help'
const PARTS = [
  {
    title: 'Contribute code',
    img: buildEcosystem,
    content: `
      From smart contracts to UI and Javascript, there are many ways to help build Aragon
    `,
    callToAction: {
      text: 'Check good first issues',
      link: 'https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+label%3A%22good+first+issue%22+user%3Aaragon'
    },
  },
  {
    title: 'Contribute content',
    img: technologyCompany,
    content: `
      Help keep the wiki up to date, contribute to the newsletter or even enhance this website
    `,
    callToAction: {
      text: 'Go to the wiki repo',
      link: 'https://github.com/aragon/aragon-wiki'
    },
  },
  {
    title: 'Apply for a job',
    img: fullyDistributed,
    content: `
      The teams building Aragon are hiring
    `,
    callToAction: {
      text: 'View openings',
      link: 'https://wiki.aragon.org/jobs'
    },
  },
  {
    title: 'Join the conversation',
    img: deepWorkSessions,
    content: `
      Participate in our core dev calls or join the Aragon chat
    `,
    callToAction: {
      text: 'Join the Aragon Chat',
      link: 'https://aragon.chat'
    },
  },
]

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled(Section)`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  h1 {
    padding: 30px 0 0;
    font-size: 15px;
    text-transform: uppercase;
    color: ${themeDark.accent};
  }
  ${medium(css`
    max-width: none;
    h1 {
      padding-bottom: 40px;
      font-size: 18px;
    }
  `)};
`

const Content = styled.div`
  ${medium(`
    display: flex;
    flex-direction: column;
    align-items: center;
  `)};
  ${large(`
    background: url(${logo}) no-repeat 50% 50%;
  `)};
`

const Row = styled.div`
  ${medium(`
    display: flex;
    flex-wrap: wrap;
  `)};
  ${large(`
    width: 100%;
    justify-content: space-between;
  `)};
`

const StyledPart = styled.div`
  margin-top: 40px;
  h2 {
    margin: 20px 0;
    color: ${themeDark.textPrimary};
    font-size: 26px;
  }
  p {
    color: ${themeDark.textSecondary};
    font-size: 18px;
    margin-bottom: 1rem;
  }
  ${medium(`
    width: calc(50% - 15px);
    max-width: 355px;
    margin-top: 0;
    margin-right: 15px;
    padding-bottom: 80px;
    & + & {
      margin-top: 0;
      margin-right: 0;
      margin-left: 15px;
    }
    .image {
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `)};
  ${large(`
    max-width: 260px;
  `)};
`

const Part = ({ img, title, content, callToAction }) => (
  <StyledPart>
    <div className="image">
      <span>
        <img src={img} alt="" />
      </span>
    </div>
    <h2>{title}</h2>
    <p>{content}</p>
    <Anchor
      href={callToAction.link}
      target="_blank"
    >
      {callToAction.text}
    </Anchor>
  </StyledPart>
)

const wrapEvery = (children, every = 2) => {
  return children.reduce((wrappers, child, i) => {
    if (!(i % every)) {
      wrappers.push([])
    }
    wrappers[wrappers.length - 1].push(child)
    return wrappers
  }, [])
}

const HowToHelp = () => (
  <OverlapBackground>
    <Main>
      <h1>{TITLE}</h1>
      <Content>
        {wrapEvery(PARTS.map(part => <Part key={part.title} {...part} />)).map(
          (children, i) => <Row key={i}>{children}</Row>
        )}
      </Content>
    </Main>
  </OverlapBackground>
)

export default HowToHelp
