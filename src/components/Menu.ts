import React from 'react';
import { GatsbyLinkProps } from 'gatsby-link';

export type MenuItem = {
  name: string;
  path: string;
  exact: boolean;
  icon?: string;
  inverted?: boolean;
};

export type MenuProps = {
  items: MenuItem[];
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps<any>> | any;
} & React.HTMLProps<HTMLDivElement>;
