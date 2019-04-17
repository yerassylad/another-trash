import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./Modal";

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate = nextProps => {
    const { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  };

  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <Fragment>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
        </Switch>
        {isModal ? <Route path="/img/:id" component={Modal} /> : null}
      </Fragment>
    );
  }
}

const Home = () => {
  return (
    <Fragment>
      <Link
        to={{
          pathname: `/img/0`,
          state: { modal: true }
        }}
      >
        img0
      </Link>
      <Link
        to={{
          pathname: `/img/1`,
          state: { modal: true }
        }}
      >
        img1
      </Link>
    </Fragment>
  );
};

const App = () => {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
};

export default App;
