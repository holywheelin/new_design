import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Modal } from 'semantic-ui-react';

export const Movie = () => (
  <Modal
    trigger={<SpaceButton>Show Movie</SpaceButton>}
    basic
    closeIcon
  >
    <Modal.Content>
      <Grid>
        <ResponsiveWrapper>
          <iframe
            src="https://www.youtube.com/embed/vfY5GDtiGCU?rel=0&modestbranding=0&showinfo=0&fs=0&controls=0"
            frameBorder="0"
            allowFullScreen
            title="movie"
          />
        </ResponsiveWrapper>
      </Grid>
    </Modal.Content>
  </Modal>
);

const ResponsiveWrapper = styled.div`
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const SpaceButton = styled.div`
star-wars-intro .space-button {
  color: #EBD71C;
  border: 12px solid #EBD71C;
  padding: 20px;
  background: transparent;
  text-decoration: none;
  margin: 0 auto;
  display: block;
  text-align: center;
}

.star-wars-intro .space-button:hover {
  background-color: #D2BE03;
  border-color: #D2BE03;
  color: black;
}

.star-wars-intro .space-button:active,
.star-wars-intro .space-button:focus {
  background-color: #B8A40A;
  border-color: #B8A40A;
  color: black;
}
`;