import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FixedMenu from "./components/Main/FixedMenu";
import clearPhotos from "./actions/Pohotos/clearPhotos";
import toPageOne from "./actions/Pohotos/toPageOne";
import incrementPage from "./actions/Pohotos/incrementPage";
import getLatestPhotos from "./actions/Pohotos/getLatestPhotos";
import PhotoStock from "./components/Main/PhotoStock";

export class Home extends Component {
  getLatestPhotos = () => {
    const { getLatestPhotos, page } = this.props;
    getLatestPhotos(page);
  };

  appendLatestPhotos = () => {
    const { incrementPage, getLatestPhotos, page } = this.props;
    incrementPage();
    getLatestPhotos(page + 1);
  };

  componentDidMount = () => {
    this.getLatestPhotos();
  };

  componentWillUnmount = () => {
    const { clearPhotos, toPageOne } = this.props;
    toPageOne();
    clearPhotos();
  };

  render() {
    const { photos } = this.props;
    return (
      <div>
        <FixedMenu />
        <PhotoStock images={photos} appendImages={this.appendLatestPhotos} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.appendLatestPhotos}>+</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.photos.page,
  photos: state.photos.photos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearPhotos,
      toPageOne,
      getLatestPhotos,
      incrementPage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
