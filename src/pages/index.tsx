import React from 'react';
import styled from 'styled-components';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
import { Layout } from '../components/Layout';
import { Movie } from '../components/Movie';
import { Firstview } from '../components/Firstview';
import cars from '../imgs/holywheelin-cars.png';
import singStreet from '../imgs/singStreet.jpg';

const IndexPage = () => (
  <Layout>
    {/*<Segment vertical text-align="center">
      <Firstview />
</Segment>*/}
    <Segment>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Column>
          <AlignInstruction>
          <ContentDesign>
            <TextDesign>
                <h1><img src={cars} alt="car-divider"/>Statement<img src={cars} alt="car-divider"/></h1>
            </TextDesign>
            <Header as="h3" textAlign="left">
                 <ContentTextDesign>
                     <p>はじめまして、HOLYWHEELIN’ THEATER & RADIOです。</p>
                     <p>
                       この読みづらい、覚えづらい、意味がわからない屋号はホーリーホイーリン・シアター&ラジオと読む、造語です。
                     </p>
                     <p>
                       世界で初めてラジオの電波に乗った楽曲と伝えられる讃美歌「O HOLY NIGHT」
                      （1906年12月24日、米マサチューセッツ州より）と、
                        ボブ・ディランの2ndアルバム『THEFREEWHEELIN’ BOB DYLAN』
                        （1963年5月27日全米リリース）を勝手に出会わせてしまいました。
                     </p>
                     <p>
                       私たちは、今この瞬間も世界中で同時多発的に発生し続けている、
                       そして、極東の島国の権力者があまり笑えない方法でインターネット上にばら撒いたりもしたウイルス。
                       そう、ポップ・ウイルスを、（正しく）誤配することを目指しています。
                       車、ラジオ、映画 、―崩壊しつつある「父なるアメリカ」を象徴する、原初のテクノロジーとともに。
                     </p>
                     <p>
                       この、美しく危険なウイルスが、あなたに感染し、それが自走し（freewheelin’）、
                       やがて、聖なる分子=Terrorizersへと生成変化（holywheelin’）することを願い、活動を開始します。
                     </p>
                 </ContentTextDesign>
              </Header>
              </ContentDesign>
          </AlignInstruction>
        </Grid.Column>
      </Grid>
    </Segment>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Column>
          <AlignInstruction>
            
            <TextDesign>
                <h1><img src={cars} alt="car-divider"/>About<img src={cars} alt="car-divider"/></h1>
            </TextDesign>
            <Header as="h3" textAlign="left">
                 <ContentTextDesign>
                     <p style={{ textAlign:"center",fontWeight: "bold"}} >Curation Drive-in Theater×Imaginetion Radio Program</p>
                     <p>
                     ドライブイン・シアターは、車の中から映画を鑑賞する、主に1950年代にアメリカで流行した上映形態です。
                     </p>
                     <p>
                     夜の大きな駐車場。前後左右に並んでいる知らない車。
                     公共的・開放的でありながら、私的・閉鎖的な多次元空間が創出されるドライブイン・シアターは、
                     ノスタルジックで近未来的な、不思議な映画体験へと観る者を誘います。
                     </p>
                     <p>
                     映像は正面の一つのスクリーンで鑑賞し、
                     音声はそれぞれのカーラジオのFM電波で受信するというドライブイン・シアターの特徴を利用し、
                     ラジオ番組を放送する、というのが私たちのイベントです。
                     </p>
                     <p>
                     毎回迎えるパーソナリティが、映画の上映前にはこれから鑑賞する映画についての思い出話や、
                     予備知識、より楽しく見られるポイントをトークします。そして上映が終わった後には、
                     感想や解説、余韻を共有できる楽しいおしゃべりを。
                     </p>
                     <p>
                     お越し下さったみなさまと、かけがえのない時間を分かち合えるイベントになりますよう、
                     </p>
                 </ContentTextDesign>
              </Header>
          </AlignInstruction>
        </Grid.Column>
      </Grid>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Column>
          <AlignInstruction>
            
            <TextDesign>
                <h1><img src={cars} alt="car-divider"/>Scedule<img src={cars} alt="car-divider"/></h1>
            </TextDesign>
            <Header as="h3" textAlign="left">
                 <ContentTextDesign>
                     <p>
                     ■SCHDULEHolywheeiin’ Theater & Radio in YOKOSUKA
                     </p>
                     <p>
                     【日程】6/13（土）・14（日）
                     </p>
                     <p>
                     【会場】湘南衣笠ゴルフ 駐車場https://sk-golf.co.jp/〒238-0024神奈川県横須賀市大矢部1-3-
                     </p>
                 </ContentTextDesign>
              </Header>
          </AlignInstruction>
        </Grid.Column>
      </Grid>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Column>
          <AlignInstruction>
            
            <TextDesign>
                <h1><img src={cars} alt="car-divider"/>タイムテーブル<img src={cars} alt="car-divider"/></h1>
            </TextDesign>
            <Header as="h3" textAlign="left">
                 <ContentTextDesign>
                 18：00〜 開場19：00〜19：30 ラジオ放送19：30〜21：30 映画上映21：30〜22：30　退場・ラジオ放送
                 </ContentTextDesign>
              </Header>
          </AlignInstruction>
        </Grid.Column>
      </Grid>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Column>
          <AlignInstruction>
            
            <TextDesign>
                <h1><img src={cars} alt="car-divider"/>上映作品<img src={cars} alt="car-divider"/></h1>
            </TextDesign>
            <Header as="h3" textAlign="left">
                 <ContentTextDesign>
                  <p><a href="http://everybodywantssome.jp/">『シング・ストリート未来へのうた』</a></p>
                 <img src={singStreet} width="40%"/>
                 </ContentTextDesign>
              </Header>
          </AlignInstruction>
        </Grid.Column>
      </Grid>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Column>
          <AlignInstruction>
            
            <TextDesign>
                <h1><img src={cars} alt="car-divider"/>注意事項<img src={cars} alt="car-divider"/></h1>
            </TextDesign>
            <Header as="h3" textAlign="left">
                 <ContentTextDesign>
                  WEBチケットサービス「Peatix」よりお買い求め頂きます
                  ＝＝注意事項＝＝
                  <p>イベントに関して</p>
                  <p>◆会場である湘南衣笠ゴルフのご提案により、
                  当イベントは横須賀市民のためのものとさせていただきます。
                  ◆小雨の場合は決行いたしますが、
                  荒天や新型コロナウイルス感染拡大の状況により、翌週20日21日もしくはそれ以降に順延する可能性がございます。
                  ◆予見可能な順延の際には前日午前10時迄に、天候などによる順延の際には当日午前10時迄に発表いたします。
                  ご来場に関して◆映画鑑賞およびラジオの受信にはFMカーラジオの使用が 必要 となりますので、
                  FMカーラジオ搭載 の自動車でお越しください。◆先着順  でスタッフがスクリーンに向けた駐車位置へ誘導いたしますが、
                  車高によっては後方の駐車位置をお願いすることがございますので、ご了承ください。
                  ◆飲食物のお持ち込みは可能です。衛生面を考慮し会場内での販売はございませんので、
                  各自でご準備下さい。◆車外での飲食は禁止となります。ゴミは各自でお持ち帰りください。
                  ◆飲酒運転は法律で禁じられています。◆上映時間までにトイレをお済ませください。
                  トイレは会場となる湘南衣笠ゴルフの施設内にございます。
                  ◆トイレなどで車外に出る場合は必ずマスク着用をお願いいたします。
                  ◆会場内での喫煙は、車の窓を閉め、車内でお願いいたします。
                  ◆盲導犬、介助犬、聴導犬を除き、ペット同伴のご来場はお控えください。
                  </p>
                 </ContentTextDesign>
              </Header>
          </AlignInstruction>
        </Grid.Column>
      </Grid>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Column>
          <AlignInstruction>
            
            <TextDesign>
                <h1><img src={cars} alt="car-divider"/>CONTACT<img src={cars} alt="car-divider"/></h1>
            </TextDesign>
            <Header as="h3" textAlign="left">
                 <ContentTextDesign>
                 HOLYWHEELIN’ THEATER & RADIOについて、・開催のご提案・共同企画のご相談などのお 問い合わせは、
                 下記 ホーリーホイーリン・シアター&ラジオ  事務局  までお願いいたします。
                 （お 急ぎ で場合は、メールで頂けるとありがたいです。お電話の場合、出られない可能性があります。
                 その際は必ず留守番電話にメッセージをお願いいたします。）
                 MAIL：holywheelin@gmail.comTEL：080 1399 3549（担当：山野）
                 【運営会社】合同会社 場末（BSE）世田谷区北沢3-30-3TTビル3階 場末アーカイブ
                 </ContentTextDesign>
              </Header>
          </AlignInstruction>
        </Grid.Column>
      </Grid>
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

const ContentTextDesign = styled.div`
p {
  line-height: 3.2em;
}
a {
  text-align: center;
}
`;

const ContentDesign = styled.div`
padding: 3.5em 1.5em;
border-top: solid 2px black;
border-bottom: solid 2px black;
`;

const TextDesign = styled.div`
padding-bottom: .5em;
h1{
	margin:0px;
	padding:0px;
}
img{
  vertical-align:middle;
  width: 10%;
  margin: 0 30 0 5;
}
`;

const CarsPosition = styled.div`
vertical-align:middle;
margin-right:10px;
`;

const CarsDivider = () => {
  return (
      <img src={cars} height="30em" alt="car-divider" />
  );
};

export default IndexPage;
