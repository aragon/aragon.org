import React from 'react'
import SideBySide from '../../SideBySide/SideBySide'

import transfer from './assets/transfer.png'
import raise from './assets/raise.png'

const Transfer = () => (
  <SideBySide
    items={[
      {
        title: 'Transfer tokens',
        subtitle: 'Tokens represent your stake in the organization',
        textContent: `
          Your organization is in control of its funds. Transfer and assign
          them according to your personal needs
        `,
        image: transfer,
      },
      {
        title: 'Fundraising',
        subtitle: 'Grasp the potential of crowdfunding',
        textContent: `
          Utilize the power of the crowd and raise funds globally, in private
          or publicly, without relying on banks or financial gatekeepers
        `,
        image: raise,
      },
    ]}
  />
)

export default Transfer
