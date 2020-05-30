import React from 'react';
import { Menu } from 'semantic-ui-react';
import instalogo from '../../imgs/instagram.svg';
import twitterlogo2 from '../../imgs/twitter_2.svg';
import holyLogo from '../../imgs/holywheelin_logo'
import '../../css/semantic.min.css';


type Props = {
  mobile?: boolean;
};

export const Heading: React.FC<Props> = ({ mobile = false }) => (
  <Menu>
    <div className="ui large borderless fixed fluid menu column">
      <a className="header item" href="/">
        <p>HolyWheelin'
        THEATER&RADIO</p>
      </a>
      <div className="right menu">
        <div className="SocialButtons">
          <a href="https://twitter.com/holywheelin">
            <img src={twitterlogo2} width="50" height="50" alt="sns-twitter" />
          </a>
          <a href="https://www.instagram.com/holywheelin">
            <img src={instalogo} width="50" height="50" alt="sns-instagram" />
          </a>
        </div>
      </div>
    </div>
  </Menu>
);

// const Logo = () => null;
// <StyledImage src={logoSrc} width="70%" alt="holywheelin_logo" />
// );

// const StyledImage = styled.img`
//   background-color: #fff;
//   border: 18px solid #fff;
// `;
