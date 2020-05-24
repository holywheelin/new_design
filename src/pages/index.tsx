import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import styled from 'styled-components';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
import { Layout } from '../components/Layout';

const config = {
  size: 100,
  url: 'https://holywheelin.bsellc.jp/',
};

const IndexPage = () => (
  <Layout>
    <Segment vertical className="stripe">
      <SocialButtons className="social-buttons">
        <div className="buttons">
          <TwitterShareButton
            url={config.url}
            hashtags={['#ドライブインシアター']}
          >
            <TwitterIcon
              size={config.size ? config.size : config.size}
              round
              bgStyle={{ fill: '#ede8cb' }}
              iconFillColor="#8c2125"
            />
          </TwitterShareButton>
          <FacebookShareButton url={`https://holywheelin.bsellc.jp/`}>
            <FacebookIcon
              size={config.size ? config.size : config.size}
              round
              bgStyle={{ fill: '#ede8cb' }}
              iconFillColor="#8c2125"
            />
          </FacebookShareButton>
        </div>
      </SocialButtons>
    </Segment>
    <Grid stackable verticalAlign="middle" className="container">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/19ujruMciyk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </Grid>
    {/* About this starter */}
    {/*<Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column>
            <AlignInstruction>
              <Header as="h1" textAlign="center" content="Concept" />
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
              <Header as="h1" textAlign="center" content="開催予定地" />
              <p className="center">近日公開！</p>
            </AlignInstruction>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

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
            <Header as="h1">協力</Header>
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
</Segment>*/}
  </Layout>
);

const AlignInstruction = styled.div`
  @media screen and (max-width: 767px) {
    text-align: left;
  }
  @media not screen and (max-width: 767px) {
    text-align: center;
  }

  .center {
    text-align: center;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
`;

const SocialButtons = styled.div`
  text-align: center;
`;

export default IndexPage;
