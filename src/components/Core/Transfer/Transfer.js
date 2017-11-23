import React from 'react'
import SideBySide from '../../SideBySide/SideBySide'

import transfer from './assets/transfer.png'
import raise from './assets/raise.png'

const Transfer = () => (
  <SideBySide
    items={[
      {
        title: 'Transfer tokens',
        subtitle: 'Appoint and actuate your assets freely (TODO)',
        textContent: `
          You are in control of the flow of your funds. Your organization is in
          control of its funds (TODO). Transfer and assign them according to
          your personal needs.
        `,
        image: transfer,
      },
      {
        title: 'Fundraising',
        subtitle: 'Grasp the potential of crowdfunding',
        textContent: `
          Utilize the power of the crowd and raise funds globally, in private
          or publicly, without relying on banks or financial gatekeepers.
        `,
        image: raise,
      },
    ]}
  />
)

export default Transfer
