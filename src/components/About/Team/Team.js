import React from 'react'
import { styled } from '@aragon/ui'
import { Section, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle'
import Member from './Member'

const columns = `
  padding: 128px 0;

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }
  .columns > * {
    width: 25%;
  }
`

const CoreSection = styled(Section)`
  background: ${theme.mainBackground};

  ${columns}
`

const Core = () => (
  <CoreSection>
    <div className="core">
      <SectionTitle title="Core Team" />
      <div className="columns">
        <Member picture="Luis.png" name="Luis Cuende" title="Project Lead" twitter="licuende" medium="lic" github="luisivan" />
        <Member picture="Jorge.png" name="Jorge Izquierdo" title="Tech Lead" twitter="izqui9" medium="izqui9" github="izqui" />
        <Member picture="Maria.png" name="Maria Gomez" title="Strategy Lead" twitter="izqui9" medium="izqui9" github="izqui" />
        <Member picture="Tatu.png" name="Tatu Karki" title="Communications Director" twitter="izqui9" medium="izqui9" github="izqui" />
        <Member picture="Tatu.png" name="Luke Duncan" title="Research Lead" twitter="izqui9" medium="izqui9" github="izqui" />
        <Member picture="Oliver.png" name="Oliver Nordbjerg" title="Glue" twitter="izqui9" medium="izqui9" github="izqui" />
        <Member picture="Oliver.png" name="Pierre Bertet" title="UI & Interaction Developer" twitter="izqui9" medium="izqui9" github="izqui" />
      </div>
    </div>
  </CoreSection>
)

const AdvisorsSection = styled(Section)`
  background: white;

  ${columns}
`

const Advisors = () => (
  <AdvisorsSection>
    <div className="advisors">
      <SectionTitle title="Advisors" />
      <div className="columns">
        <Member picture="Mihai.jpg" name="Mihai Alisie" title="Ethereum cofounder and AKASHA founder" twitter="mihaialisie" />
        <Member picture="Jake.jpg" name="Jake Brukhman" title="Cofounder at CoinFund" twitter="jbrukh" />
        <Member picture="Kenny.jpg" name="Kenny Rowe" title="COO of Dai Foundation" twitter="kennyrowe" />
        <Member picture="Brayton.jpg" name="Brayton Williams" title="Founding Partner at Boost VC" twitter="BraytonKey" />
      </div>
    </div>
  </AdvisorsSection>
)

const Team = () => (
  <div>
    <Core />
    <Advisors />
  </div>
)

export default Team
