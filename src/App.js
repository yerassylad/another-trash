import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./Modal";
import Search from "./Search";
import unsplash from "./api";

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
          <Route path="/search/:search" component={SearchPage} />
        </Switch>
        {isModal ? <Route path="/img/:id" component={Modal} /> : null}
      </Fragment>
    );
  }
}

export class SearchPage extends Component {
  state = {
    images: []
  };

  searchImages = async () => {
    const search = this.props.match.params.search;
    const response = await unsplash.get("/search/photos", {
      params: {
        query: search
      }
    });
    this.setState({ images: response.data.results });
  };

  componentDidMount = () => {
    this.searchImages();
  };

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <Fragment>
        {images.map(image => (
          <img src={image.urls.regular} alt={image.description} />
        ))}
      </Fragment>
    );
  }
}

const Home = () => {
  return (
    <div>
      <div>
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
      </div>
      <div>
        <Search />
      </div>
      <div>
        <button type="button">search</button>
      </div>
    </div>
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
