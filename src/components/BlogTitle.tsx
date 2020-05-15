import React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="newspaper" />
        <Header.Content>
          HolyWheelin' Official Site
          <Header.Subheader>©︎HolyWheelin'</Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
