import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FixedMenu from "./components/Main/FixedMenu";
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
    const { page } = this.props;
    if (page === 1) {
      this.getLatestPhotos();
    }
  };

  componentDidUpdate = prevProps => {
    const { page } = this.props;
    if (prevProps.page !== 1 && page === 1) {
      this.getLatestPhotos(page);
    }
  };

  componentWillUnmount = () => {
    const { defaultPhotos } = this.props;
    defaultPhotos();
  };

  render() {
    const { photos } = this.props;
    return (
      <div>
        <FixedMenu />
        <PhotoStock images={photos} appendImages={this.appendLatestPhotos} />
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
      getLatestPhotos,
      incrementPage,
      defaultPhotos: () => ({
        type: "DEFAULT_PHOTOS"
      })
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
