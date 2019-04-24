import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import Search from "../../../Search";

const FixedMenu = props => {
  return (
    <Menu>
      <Menu.Item header>
        <Icon name="youtube" />
      </Menu.Item>
      <Menu.Item style={{ flexGrow: 1 }}>
        <Search />
      </Menu.Item>
    </Menu>
  );
};

export default FixedMenu;
