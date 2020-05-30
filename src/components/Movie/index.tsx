import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Modal } from 'semantic-ui-react';

export const Movie = () => (
  <Modal
    trigger={<Button style={{ marginBottom: '20px' }}>Show Movie</Button>}
    basic
    closeIcon
    style={{ top: '10%' }}
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
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
