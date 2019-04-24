import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import FixedMenu from "./components/Main/FixedMenu";
import Logo from "./components/Main/Logo";

const Home = props => {
  return (
    <div>
      <div>
        <FixedMenu />
      </div>
      <div>
        <Link
          to={{
            pathname: `/img/d4v0AwkMsbo`,
            state: { modal: true }
          }}
        >
          img0
        </Link>
        <Link
          to={{
            pathname: `/img/JMbEJM1ROn0`,
            state: { modal: true }
          }}
        >
          img1
        </Link>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Home;
