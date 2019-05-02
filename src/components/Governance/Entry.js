import React from 'react'
import styled from 'styled-components'
import { theme, breakpoint } from '@aragon/ui'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

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
    top: 6px;
    left: -14px;
    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);
  }
  .description:before {
    content: '';
    width: 26px;
    height: 26px;
    border-radius: 30px;
    opacity: 0.22;
    background-image: linear-gradient(to right,#6aacf4,#18ebd6);
    position: absolute;
    left: -21px;
    top: -1px;
  }
  .description {
    margin: 0 0 3em;
    float: right;
    width: 100%;
    padding-left: 30px;
    position: relative;
  }
  .description p {
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: 0.5px;
    color: #2D4051;
    text-transform: uppercase;
  }
`;

const Entry = ({ ...props }) => (
  <EntryBox>
    <div className="description">
      <p>{props.title}</p>
      {props.children}
    </div>
  </EntryBox>
);

export default Entry
