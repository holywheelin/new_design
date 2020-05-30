import React from 'react';
import styled from 'styled-components';
import holywheelin from '../../imgs/holywheelin.jpg'
import { Movie } from '../Movie'
import { Segment } from 'semantic-ui-react';

export const Firstview = () => (

  <div className="star-wars-intro">

  {/* Blue Intro Text */}
  <p className="intro-text">
    <p>2020/06/13 ~ 2020/06/14</p>
    <p>湘南衣笠ゴルフ駐車場にて</p>
  </p>

  {/*} Logo Image or Text goes in here */}
  {/*<h1 className="main-logo">
    <img src={holywheelin}>
</h1>*/}

  
  {/* All Scrolling Content Goes in here */}
  <div className="main-content">

    <div className="title-content">
      <p className="content-header">HolyWheelin' <br/>THEATER&RADIO <br /><br/> Curation Drive-in Theater <br /> x <br /> Imaginetion Radio Program </p>

      <p className="content-body">車を運転する。遠くの町へ行けるようになる。<br />ラジオを聴く。海の向こうの電波をキャッチする。<br />映画を観る。知らない世界がインストールされる。<br />車、ラジオ、映画 -。</p>

      {/* button or link or whatever */}
      <Movie />
      <a href="./" className="space-button">Show Video</a>
        
    </div>
    <Movie />
  </div>
</div>
);
