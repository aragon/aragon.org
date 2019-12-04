import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from '@aragon/ui'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const EntryBox = styled.div`
  clear: both;
  text-align: left;
  position: relative;

  .description:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    top: 5.5px;
    left: 18px;
    ${medium('top: 6px; left: -14px;')};
    background-image: linear-gradient(71deg, #6aacf4, #18ebd6);
  }
  .description:before {
    content: '';
    width: 26px;
    height: 26px;
    border-radius: 30px;
    opacity: 0.22;
    background-image: linear-gradient(to right, #6aacf4, #18ebd6);
    position: absolute;
    left: 10px;
    top: -1px;
    ${medium('left: -21px;')};
  }
  .description {
    margin: 0 0 3em;
    float: right;
    width: 100%;
    padding-left: 45px;
    ${medium('padding-left: 30px;')};
    position: relative;
  }
  .description p {
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: 0.5px;
    color: #2d4051;
    text-transform: uppercase;
  }
`

const Entry = ({ ...props }) => (
  <EntryBox>
    <div
      className={
        props.className ? props.className + ' description' : 'description'
      }
    >
      <p>
        <FormattedMessage
          id="project.governance.timeline.stage"
          defaultMessage="Stage"
        />{' '}
        {props.title}
      </p>
      {props.children}
    </div>
  </EntryBox>
)

export default Entry
