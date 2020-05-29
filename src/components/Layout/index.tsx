import React, { useState } from 'react';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { Heading } from './Heading';
import { getWidth } from './utils';
import '../../css/styles.css';
import '../../css/responsive.css';
import '../../css/semantic.min.css';
import 'prismjs/themes/prism-okaidia.css';
import styled from 'styled-components';


const DesktopContainer: React.FC = ({ children }) => {
  const [fixed, setFixed] = useState(false);
  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          textAlign="center"
          style={{ minHeight: 500, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : undefined}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            {/*<Container>*/}
              {/* TODO: active管理・Link化 */}
              {/*<Menu.Item as="a" active>
                Home
  </Menu.Item>*/}
              {/*<Menu.Item as="a">Comming Soon!</Menu.Item>
              <Menu.Item as="a">Comming Soon!</Menu.Item>
  <Menu.Item as="a">Comming Soon!</Menu.Item>*/}
            {/*</Container>*/}
          </Menu>
          <Heading />
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  );
};

const MobileContainer: React.FC = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
      </Sidebar>

      {/*<Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          textAlign="center"
          style={{ minHeight: 250, padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
          </Container>
          <Heading mobile />
        </Segment>
        {children}
       </Sidebar.Pusher>*/}
        <Segment
          textAlign="center"
          style={{ minHeight: 250, padding: '1em 0em' }}
          vertical
        ><Heading mobile />
        {children}</Segment>
    </Responsive>
  );
};

const StyledBackGround = styled.div`
  background-color: #fff;
`;

export const Layout: React.FC = ({ children }) => (
  <StyledBackGround>
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  </StyledBackGround>
);
