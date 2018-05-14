import React from 'react'
import styled from 'styled-components'
import { Text, theme, breakpoint } from '@aragon/ui'
import { Section } from '@aragon/web'
import SectionTitle from '../SectionTitle'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled(Section)`
  padding: 50px 15px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  .item + .item {
    margin-top: 50px;
  }
  img {
    display: block;
    max-width: 100%;
    border: 1px solid #dbebea;
    border-radius: 3px;
    margin-top: 50px;
  }
  h1 {
    margin-bottom: 10px;
  }
  h2 {
    font-size: 25px;
    margin-bottom: 30px;
  }
  p {
    color: ${theme.textSecondary};
  }

  ${medium(`
    padding-top: 120px;
    padding-bottom: 120px;
    text-align: left;
    h1 {
      text-align: left;
    }
    .columns {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      margin: 50px 0;
    }
    .item {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-top: 50px;
      flex-wrap: nowrap;
    }
    .item .image {
      flex-grow: 1;
      display: flex;
      align-items: flex-end;
    }
    .item:nth-child(1) {
      padding-right: 15px;
      text-align: left;
    }
    .item:nth-child(2) {
      padding-left: 15px;
      text-align: right;
    }
    .item:nth-child(2) h1 {
      text-align: right;
    }
  `)};
`

const SideBySide = ({ className, items }) => (
  <Main className={className}>
    <div className="columns">
      {items.slice(0, 2).map(({ title, subtitle, textContent, image }, i) => (
        <div className="item" key={i}>
          {title && <SectionTitle title={title} className="title" />}
          <h2>{subtitle}</h2>
          <p>{textContent}</p>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
      ))}
    </div>
  </Main>
)

export default SideBySide
