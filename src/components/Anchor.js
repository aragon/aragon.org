import React from 'react'
import { Button } from '@aragon/ui'

const Anchor = ({ href, target, ...props }) => (
  <a href={href} target={target}>
    <Button {...props} />
  </a>
)

export default Anchor
