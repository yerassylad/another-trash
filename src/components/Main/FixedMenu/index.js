import React from "react";
import { Menu } from "semantic-ui-react";
import Logo from "../Logo";
import { withRouter } from "react-router-dom";
import searchForm from "../../../HOCs/searchForm";
import SearchForm from "../SearchForm";

const RegularSearch = searchForm(SearchForm);

const FixedMenu = props => {
  console.log("from fixed menu", props);
  const path = props.location.pathname;
  const goHome = () => {
    props.history.push("/");
  };

  return (
    <div>
      <Menu style={{ height: 80 }} fixed="top" borderless>
        <Menu.Item onClick={goHome} disabled={path === "/"} header>
          <Logo />
        </Menu.Item>
        <Menu.Item style={{ flexGrow: 1 }}>
          <RegularSearch />
        </Menu.Item>
      </Menu>
      <div style={{ height: 80 }} />
    </div>
  );
};

export default withRouter(FixedMenu);
