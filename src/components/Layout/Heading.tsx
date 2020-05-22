import React from 'react';
import styled from 'styled-components';
import { Container, Header } from 'semantic-ui-react';

import logoSrc from '../../imgs/_Holywheelin-logo_A.png';

type Props = {
  mobile?: boolean;
};

export const Heading: React.FC<Props> = ({ mobile = false }) => (
  <Container>
    {/* {mobile && (
      <Header
        as="h1"
        content="HolyWheelin' THEATER&RADIO"
        inverted
        style={{
          fontSize: '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '1.5em',
        }}
      />
    )} */}
    {/* トップのコンテンツに含める? propsで取る? */}
    <Logo />
  </Container>
);

const StyledImage = styled.img`
  background-color: #fff;
  border: 18px solid #fff;
`;

const Logo = () => (
  <StyledImage src={logoSrc} width="100%" alt="holywheelin_logo" />
);
