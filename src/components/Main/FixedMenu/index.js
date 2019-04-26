import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MobileFixedMenu from "./MobileFixedMenu";
import RegulaFixedMenu from "./RegulaFixedMenu";

const FixedMenu = props => {
  const { location, history, deviceType } = props;
  const isHomeDisabled = location.pathname === "/";
  const goHomeFn = () => {
    history.push("/");
  };
  if (deviceType === 1) {
    return (
      <MobileFixedMenu isHomeDisabled={isHomeDisabled} goHome={goHomeFn} />
    );
  } else {
    return (
      <RegulaFixedMenu isHomeDisabled={isHomeDisabled} goHome={goHomeFn} />
    );
  }
};

const mapStateToProps = state => ({
  deviceType: state.core.deviceType
});

export default withRouter(connect(mapStateToProps)(FixedMenu));
