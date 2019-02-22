import React from 'react';
import styled from 'styled-components';
import {theme, breakpoint} from '@aragon/ui';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Entry = ({children, entrypoint, lastpoint}) => (
  <EntryBox>
    {entrypoint && <div className="entry-point" />}
    {lastpoint && <div className="last-point" />}
    <div className="content">{children}</div>
  </EntryBox>
);

const EntryBox = styled.div`
  clear: both;
  text-align: left;
  position: relative;
  .entry-point {
    width: 33%;
    position: relative;
  }
  .entry-point:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    top: 6px;
    left: 4px;
    background: linear-gradient(44.28deg, #00dbe2 0%, #01bfe3 101.29%);
    ${medium('left: -34px;')};
  }
  .entry-point:before {
    content: '';
    width: 26px;
    height: 26px;
    border-radius: 30px;
    background: linear-gradient(44.28deg, #00dbe2 0%, #01bfe3 101.29%);
    mix-blend-mode: normal;
    opacity: 0.18;
    position: absolute;
    left: -3px;
    top: -1px;
    ${medium('left: -40.5px;')};
  }
  .content {
    margin: 0 0 2em;
    float: right;
    width: 90%;
    padding-left: 5px;
    position: relative;
    ${medium('width: 100%;')};
  }
  .last-point:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    top: 6px;
    left: -34px;
    background: #d8d8d8;
  }
`;

export default Entry;
