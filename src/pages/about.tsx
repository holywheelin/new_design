import React from 'react';
import { Header, Container, Segment, Icon } from 'semantic-ui-react';
import { Layout } from '../components/Layout';
//import Checkout from '../components/checkout';

const AboutPage = () => (
  <Layout>
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>チケット・グッズ</Header.Content>
        </Header>
      </Segment>
      {/*<Segment>
        <div>
          <Checkout />
        </div>
      </Segment>*/}
    </Container>
  </Layout>
);

export default AboutPage;
