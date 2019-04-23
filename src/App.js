import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";
import unsplash from "./api";
import ImagePage from "./ImagePage";
import Avatar from "./components/Main/Avatar";
import DownloadButton from "./components/Main/DownloadButton";
import ImageWithDimmer from "./components/Main/ImageWithDimmer";

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
        {isModal ? <Route path="/img/:id" component={ImagePage} /> : null}
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
          <ImageWithDimmer
            key={image.id}
            image={image}
            handleGoToPhoto={() => console.log("go to photo")}
            handleDownload={() => console.log("download photo")}
          />
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
        <Avatar
          avatarUrl="https://images.unsplash.com/profile-1509295422571-8431e534c2c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32"
          lastName="Aitkazy"
          firstName="Yerassyl"
        />
      </div>
      <div>
        <DownloadButton />
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
