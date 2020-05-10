import React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import { Segment, Container, Grid, Header, Icon } from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
    </Segment>
    <Container>
      <img src={require(`../imgs/holywheelin.jpg`)} width="99%" height="40%" />
    </Container>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="12">
            <Header>概要</Header>
            <p>
              ドライブインシアターとラジオが融合した、全く新しい野外映画プロジェクト
            </p>
            <p>
              ドライブインシアターは、電波をFM送信機で飛ばし、鑑賞者は各カーオーディオで周波数を合わせることによって映画の音声を受信します。
              その特性を利用し、「Holywheelin’ Theater
              &Radio」では、映画の上映前に、
              オリジナルのラジオ番組を放送いたします。
              毎回異なるパーソナリティをお招きし、これから上映される映画の見どころ・魅力を
              語っていただく、という放送です。
            </p>
            <Header>開催予定地</Header>
            <p>近日公開！</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="1"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Header h1>協力</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid
        columns="2"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              安齋肇
            </Header>
            <p>
              「タモリ倶楽部」のソラミミスト(今年4月より同コーナーは休止中)としてもお馴染みのイラストレーター
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              SHINKO(スチャダラパー)feat.中原昌也(a.k.a. HairStylistics)
            </Header>
            <p>
              SHINKIOさんのポップなサウンドに、中原さんのノイジーなスクリームが響き渡ります(予定)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default withLayout(IndexPage);
