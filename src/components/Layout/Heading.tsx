import React from 'react';
import styled from 'styled-components';
import { Container, Header,Grid } from 'semantic-ui-react';

import logoSrc from '../../imgs/holywheelin-white.png';

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
    <div id="youtubePopup">
      <Movie />
    </div>
    <Logo />
  </Container>
);

const StyledImage = styled.img`
  background-color: #fff;
  border: 18px solid #fff;
`;

const popupYoutube = styled.video`
  border: 18px solid #222222;
`;

const Logo = () => (
  <StyledImage src={logoSrc} width="70%" alt="holywheelin_logo" />
);

const Movie = () => (
  <Grid stackable verticalAlign="middle" className="container">
    <div class="iframe-wrap">
      <iframe
        width="1980"
        height="720"
        src="https://www.youtube.com/embed/vfY5GDtiGCU?rel=0&modestbranding=0&showinfo=0&fs=0&controls=0"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
     </div>
  </Grid>
);

