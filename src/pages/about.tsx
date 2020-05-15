import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import Checkout from "../components/checkout";
import Price from "../components/price";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            チケット・グッズ
          </Header.Content>
        </Header>
      </Segment>
      <Segment>
        <div>
          <Checkout />
        </div>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
