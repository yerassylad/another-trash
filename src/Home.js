import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FixedMenu from "./components/Main/FixedMenu";
import defaultPhotos from "./actions/Pohotos/defaultPhotos";
import getLatestPhotos from "./actions/Pohotos/getLatestPhotos";
import PhotoStock from "./components/Main/PhotoStock";
import Wrapper from "./components/Main/Wrapper";

export class Home extends Component {
  fetchLatestPhotos = () => {
    const { getLatestPhotos, page } = this.props;
    getLatestPhotos(page);
  };

  componentDidMount = () => {
    const { dirty } = this.props;
    if (!dirty) {
      this.fetchLatestPhotos();
    }
  };

  componentDidUpdate = prevProps => {
    const { dirty, page } = this.props;
    if (prevProps.dirty && !dirty) {
      this.fetchLatestPhotos();
    }
    if (dirty && prevProps.page !== page) {
      this.fetchLatestPhotos();
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
        <PhotoStock images={photos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.photos.page,
  photos: state.photos.photos,
  dirty: state.photos.dirty
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getLatestPhotos,
      defaultPhotos
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
