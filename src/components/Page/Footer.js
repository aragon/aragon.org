import React from 'react'
import { Text, breakpoint, SafeLink } from '@aragon/ui'
import styled from 'styled-components'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);


const FooterSection = styled.section`
`;

const Footer = ({ ...props }) => (
  <FooterSection>
    footer
  </FooterSection>
);

export default Footer
