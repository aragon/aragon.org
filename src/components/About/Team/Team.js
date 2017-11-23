import React from 'react'
import { styled, breakpoint, Section, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle'
import Member from './Member'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const CoreSection = styled(Section)`
  padding: 50px 0;
  background: ${theme.mainBackground};

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }

  ${medium(`
    padding: 120px 0;
  `)};
`

const StyledMember = styled(Member)`
  width: 50%;
  ${medium(`
    width: 33%;
  `)};
  ${large(`
    width: 25%;
  `)};
`

const Core = () => (
  <CoreSection>
    <div className="core">
      <SectionTitle title="Core Team" />
      <div className="columns">
        <StyledMember
          picture="Luis.png"
          name="Luis Cuende"
          title="Project Lead"
          twitter="licuende"
          medium="lic"
          github="luisivan"
        />
        <StyledMember
          picture="Jorge.png"
          name="Jorge Izquierdo"
          title="Tech Lead"
          twitter="izqui9"
          medium="izqui9"
          github="izqui"
        />
        <StyledMember
          picture="Maria.png"
          name="Maria Gomez"
          title="Strategy Lead"
          twitter="MyPaoG"
          medium="MyPaoG"
          github="mariapao"
        />
        <StyledMember
          picture="Tatu.png"
          name="Tatu Karki"
          title="Communications Director"
          twitter="Smokyish"
          medium="Smokyish"
          github="Smokyish"
        />
        <StyledMember
          picture="Luke.png"
          name="Luke Duncan"
          title="Research Lead"
          twitter="lkngtn"
          medium="lkngtn"
          github="lkngtn"
        />
        <StyledMember
          picture="Oliver.png"
          name="Oliver Nordbjerg"
          title="Glue"
          twitter="ONordbjerg"
          github="onbjerg"
        />
        <StyledMember
          picture="Pierre.png"
          name="Pierre Bertet"
          title="UI & Interaction Developer"
          twitter="bpierre"
          github="bpierre"
        />
        <StyledMember
          picture="Brett.png"
          name="Brett Sun"
          title="EVM Engineer"
          twitter="sohkai"
          medium="sohkai"
          github="sohkai"
        />
      </div>
    </div>
  </CoreSection>
)

const AdvisorsSection = styled(Section)`
  padding: 50px 0;
  background: white;

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }

  ${medium(`
    padding: 120px 0;
  `)};
`

const Advisors = () => (
  <AdvisorsSection>
    <div className="advisors">
      <SectionTitle title="Advisors" />
      <div className="columns">
        <StyledMember
          picture="Mihai.jpg"
          name="Mihai Alisie"
          title="Ethereum cofounder and AKASHA founder"
          twitter="mihaialisie"
        />
        <StyledMember
          picture="Jake.jpg"
          name="Jake Brukhman"
          title="Cofounder at CoinFund"
          twitter="jbrukh"
        />
        <StyledMember
          picture="Kenny.jpg"
          name="Kenny Rowe"
          title="COO of Dai Foundation"
          twitter="kennyrowe"
        />
        <StyledMember
          picture="Brayton.jpg"
          name="Brayton Williams"
          title="Founding Partner at Boost VC"
          twitter="BraytonKey"
        />
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
