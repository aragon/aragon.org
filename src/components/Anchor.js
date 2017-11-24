import React from 'react'
import { Button } from '@aragon/ui'

const Anchor = ({ href, ...props }) => (
  <a href={href}>
    <Button {...props} />
  </a>
)

export default Anchor
