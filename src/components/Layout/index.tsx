import React, { useState } from 'react';
import {
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { Heading } from './Heading';
import { Firstview } from '../Firstview';
import { getWidth } from './utils';
import '../../css/styles.css';
import '../../css/responsive.css';
import '../../css/semantic.min.css';
import 'prismjs/themes/prism-okaidia.css';


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
        <Segment textAlign="center" style={{ padding: '1em 0em' }} vertical>
          <Menu
            fixed={fixed ? 'top' : undefined}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
          <Heading />
          </Menu>
          <Firstview />
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
      ></Sidebar>
      <Segment textAlign="center" style={{ padding: '1em 0em' }} vertical>
        <Heading mobile />
        {children}
      </Segment>
    </Responsive>
  );
};

export const Layout: React.FC = ({ children }) => (
  <div id="bg">
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);
