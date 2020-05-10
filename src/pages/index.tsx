import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";


const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Container>
        <img src={require(`../imgs/holywheelin.jpg`)} width="99%" height="40%" />
    </Container>
  </div>;

export default withLayout(IndexPage);
