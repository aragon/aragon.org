import React from 'react'
import {
  styled,
  styledCss as css,
  Text,
  Section,
  themeDark,
  breakpoint,
} from '@aragon/ui'

import background from './assets/background.svg'
import logo from './assets/logo.svg'
import buildEcosystem from './assets/build-ecosystem.svg'
import deepWorkSessions from './assets/deep-work-sessions.svg'
import fullyDistributed from './assets/fully-distributed.svg'
import technologyCompany from './assets/technology-company.svg'

const TITLE = 'Some insights of how we work'
const PARTS = [
  {
    title: 'Fully distributed',
    img: fullyDistributed,
    content: `
      We are fully distributed company – we don’t think talent is
      geographically centralized.
    `,
  },
  {
    title: 'Deep work sessions',
    img: deepWorkSessions,
    content: `
      We do focused deep work sessions 4 days a week, leaving Friday for all
      meetings, calls, thinking time and side projects.
    `,
  },
  {
    title: 'Build ecosystem',
    img: buildEcosystem,
    content: `
      We encourage team members to spend a substantial part of their paid work
      time on unrelated blockchain open source projects to speed up the development
      of the ecosystem.
    `,
  },
  {
    title: 'Technology company',
    img: technologyCompany,
    content: `
      We are open source only and we are a technology company. Our focus is
      product first.
    `,
  },
]

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Wrapper = styled(Section)`
  position: relative;
  z-index: 1;
  pointer-events: none;
  margin-top: calc(-400px + 5%);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  ${medium(css`
    margin-top: calc(-340px + 5%);
  `)};
`

const Main = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: calc(340px - 5%) 15px 50px;
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
      <img src={img} alt="" />
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
  <Wrapper>
    <Main>
      <h1>
          {TITLE}
      </h1>
      <Content>
        {wrapEvery(PARTS.map(part => <Part key={part.title} {...part} />)).map(
          (children, i) => <Row key={i}>{children}</Row>
        )}
      </Content>
    </Main>
  </Wrapper>
)

export default Culture
