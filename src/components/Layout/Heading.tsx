import React from 'react';
import { Container } from 'semantic-ui-react';

type Props = {
  mobile?: boolean;
};

export const Heading: React.FC<Props> = ({ mobile = false }) => (
  <Container></Container>
);

// const Logo = () => null;
// <StyledImage src={logoSrc} width="70%" alt="holywheelin_logo" />
// );

// const StyledImage = styled.img`
//   background-color: #fff;
//   border: 18px solid #fff;
// `;
