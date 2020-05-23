import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import { toggleSidebar } from '../../store';
import { MenuProps } from '../Menu';

type HeaderMenuProps = {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
} & MenuProps;

export const HeaderMenu = ({
  items,
  pathname,
  Link,
  inverted,
  dispatch,
}: HeaderMenuProps) => (
  <Container>
    {/*<Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item
        as="a"
        className="mobile only"
        icon="sidebar"
        onClick={() => dispatch && dispatch(toggleSidebar())}
      />
      {items.map((item) => {
        const active = item.exact
          ? pathname === item.path
          : pathname.startsWith(item.path);
        return (
          <Menu.Item
            as={Link}
            className="mobile hidden"
            name={item.name}
            to={item.path}
            key={item.path}
            active={active}
          />
        );
      })}
    </Menu>
    */}
    <Container text>
      <h1>HolyWheelin' THEATER&RADIO</h1>
    </Container>
  </Container>
);

export default connect()(HeaderMenu);
