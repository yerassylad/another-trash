import React from "react";
import { Link } from "react-router-dom";
import FixedMenu from "./components/Main/FixedMenu";

const Home = props => {
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: 2000 }}>
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
    </div>
  );
};

export default Home;
