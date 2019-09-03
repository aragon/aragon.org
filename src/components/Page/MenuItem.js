import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, SafeLink } from '@aragon/ui'

const MenuItem = ({ url, label, active, renderLink, color }) => (
  <StyledMenuItem className={active ? 'active' : undefined} color={color}>
    <span>{renderLink({ url, children: label })}</span>
  </StyledMenuItem>
)

const StyledMenuItem = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 100%;
  > span {
    display: flex;
    align-items: center;
  }
  a {
    font-family: 'FontMedium', sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 50px;
    text-decoration: none;
    font-size: 16px;
    white-space: nowrap;
    color: white;

    ${props =>
      props.color == 'black' &&
      'color: #6D7693;'}
    &:hover {
      color: black;
      ${props =>
        props.color != 'black' &&
        'color: #ffffffb3;'}
    }
    &:focus {
      outline: 0;
      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        right: 0;
        bottom: 0;
        outline: 2px solid #4A80E4;
      }
    }
    &:active:after {
      display: none;
    }
  }
  &.active a {
    color: #4A80E4;
    font-weight: 800;
  }
`

MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  renderLink: PropTypes.func,
}

MenuItem.defaultProps = {
  active: false,
  renderLink: ({ url, children }) => <SafeLink href={url}>{children}</SafeLink>,
}

export default MenuItem
