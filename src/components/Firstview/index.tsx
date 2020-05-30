import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import holywheelin from '../../imgs/holywheelin.jpg'

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
      <p className="content-header">HolyWheelin' <br/>THEATER&RADIO</p>

      <p className="content-body">
      ＜ドライブイン・シアター＞と＜ラジオ＞を合体させた、コロナ時代のポップ・カルチャー誤配プロジェクト
      </p>

      {/* button or link or whatever */}
      <a href="./" className="space-button">Show Video</a>
        
    </div>
  </div>
</div>



);



