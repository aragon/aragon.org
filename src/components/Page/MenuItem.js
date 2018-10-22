import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, SafeLink } from '@aragon/ui'

const MenuItem = ({ url, label, active, renderLink }) => (
  <StyledMenuItem className={active ? 'active' : undefined}>
    <span>{renderLink({ url, children: label })}</span>
  </StyledMenuItem>
)

const StyledMenuItem = styled.li`
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  > span {
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 15px;
  }
  a {
    text-decoration: none;
    padding: 0 10px;
    span {
      color: #ffffff;
      font-size: 17px;
      padding: 7px 0;
    }
    span:hover {
      color: #22e0ff;
    }
  }
  &.active {
    span a span {
      color: #32325d;
      font-weight: 800;
      border-bottom: solid 1px #32325d;
    }
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
