import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import Search from "../../../Search";
import Logo from "../Logo";

const FixedMenu = props => {
  return (
    <div>
      <Menu style={{ height: 80 }} fixed="top" borderless>
        <Menu.Item header>
          <Logo />
        </Menu.Item>
        <Menu.Item style={{ flexGrow: 1 }}>
          <Search />
        </Menu.Item>
      </Menu>
      <div style={{ height: 80 }} />
    </div>
  );
};

export default FixedMenu;
