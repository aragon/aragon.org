import React from 'react'
import {
  styled,
  styledCss as css,
  Text,
  Section,
  themeDark,
  breakpoint,
} from '@aragon/ui'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import background from './assets/background.svg'
import logo from './assets/logo.svg'
import buildEcosystem from './assets/build-ecosystem.svg'
import deepWorkSessions from './assets/deep-work-sessions.svg'
import fullyDistributed from './assets/fully-distributed.svg'
import technologyCompany from './assets/technology-company.svg'

const TITLE = 'Some insights into how we work'
const PARTS = [
  {
    title: 'Fully distributed',
    img: fullyDistributed,
    content: `
      We all work remotely – we don't believe talent is geographically
      centralized
    `,
  },
  {
    title: 'Deep work sessions',
    img: deepWorkSessions,
    content: `
      We do focused deep work sessions 4 days a week, leaving Monday for
      meetings and calls
    `,
  },
  {
    title: 'Ecosystem-focused',
    img: buildEcosystem,
    content: `
      Team members are encouraged to spend a chunk of their paid work time on
      other blockchain based open source projects to aid the growth of the
      ecosystem
    `,
  },
  {
    title: 'Product first',
    img: technologyCompany,
    content: `
      We are a technology-oriented project that is open source only. Our
      position is product first — we place innovation and user experience above
      all else
    `,
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

const Part = ({ img, title, content }) => (
  <StyledPart>
    <div className="image">
      <span>
        <img src={img} alt="" />
      </span>
    </div>
    <h2>{title}</h2>
    <p>{content}</p>
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

const Culture = () => (
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

export default Culture
