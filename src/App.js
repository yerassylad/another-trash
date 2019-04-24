import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import debounce from "./libs/debounce";
import determineScreenSizes from "./libs/determineScreenSizes";
import updateDeviceType from "./actions/Core/updateDeviceType";
import updateScreenSizes from "./actions/Core/updateScreenSizes";
import ModalSwitch from "./ModalSwitch";

export class App extends Component {
  debouncedScreenSizesUpdater = debounce(() => {
    const { updateScreenSizes } = this.props;
    const screenSizes = determineScreenSizes();
    updateScreenSizes(screenSizes);
  }, 150);

  deviceTypeUpdater = () => {
    const { updateDeviceType } = this.props;
    const deviceType = this.determineDeviceType();
    updateDeviceType(deviceType);
  };

  determineDeviceType = () => {
    const { screenWidth } = this.props;
    if (screenWidth > 991) {
      return 3;
    } else if (screenWidth <= 991 && screenWidth > 479) {
      return 2;
    } else if (screenWidth <= 479) {
      return 1;
    }
  };

  componentWillMount = () => {
    window.addEventListener("resize", this.debouncedScreenSizesUpdater);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.debouncedScreenSizesUpdater);
  };

  componentDidMount = () => {
    this.debouncedScreenSizesUpdater();
  };

  componentDidUpdate = prevProps => {
    const { screenWidth } = this.props;
    if (screenWidth !== prevProps.screenWidth) {
      this.deviceTypeUpdater();
    }
  };

  render() {
    return (
      <Router>
        <Route component={ModalSwitch} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  screenWidth: state.core.screenSizes.viewPortWidth
});

export default connect(
  mapStateToProps,
  {
    updateScreenSizes,
    updateDeviceType
  }
)(App);
