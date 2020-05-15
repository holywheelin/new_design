import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GatsbyLinkProps } from 'gatsby-link';
import { Menu, Icon, Sidebar, SemanticICONS } from 'semantic-ui-react';
import { StoreState } from '../../store';
import { MenuProps, MenuItem } from '../Menu';

type SidebarMenuProps = {
  visible: boolean;
  dispatch?: Dispatch<any>;
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
} & MenuProps;

export const SidebarMenu = ({
  items,
  pathname,
  Link,
  visible,
}: SidebarMenuProps) => {
  const isActive = (item: MenuItem) =>
    item.exact ? pathname === item.path : pathname.startsWith(item.path);
  const activeItem =
    items.find((item: MenuItem) => isActive(item)) || ({} as MenuItem);
  return (
    <Sidebar
      as={Menu}
      animation="slide along"
      width="thin"
      visible={visible}
      icon="labeled"
      vertical
      inverted={activeItem.inverted}
    >
      {items.map((item) => {
        const active = isActive(item);
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon as SemanticICONS} />
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.isSidebarVisible,
});

export default connect(mapStateToProps)(SidebarMenu);
