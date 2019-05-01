import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FixedMenu from "./components/Main/FixedMenu";
import incrementPage from "./actions/Pohotos/incrementPage";
import getLatestPhotos from "./actions/Pohotos/getLatestPhotos";
import PhotoStock from "./components/Main/PhotoStock";

export class Home extends Component {
  fetchLatestPhotos = page => {
    const { getLatestPhotos } = this.props;
    getLatestPhotos(page);
  };

  // componentDidMount = () => {
  //   const { page } = this.props;
  //   if (page === 1) {
  //     this.fetchLatestPhotos();
  //   }
  // };

  // componentDidUpdate = prevProps => {
  //   const { page } = this.props;
  //   if (prevProps.page !== 1 && page === 1) {
  //     this.fetchLatestPhotos();
  //   }
  //   if (prevProps.page !== page && prevProps.page < page) {
  //     this.fetchLatestPhotos();
  //   }
  // };

  // componentWillUnmount = () => {
  //   const { defaultPhotos } = this.props;
  //   defaultPhotos();
  // };

  render() {
    const { photos } = this.props;
    return (
      <div>
        <FixedMenu />
        <PhotoStock
          images={photos}
          appendImages={() => console.log("home append")}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          {/* <button onClick={this.props.incrementPage}>append</button> */}
          <button onClick={() => this.fetchLatestPhotos(1)}>page1</button>
          <button onClick={() => this.fetchLatestPhotos(2)}>page2</button>
          <button onClick={() => this.fetchLatestPhotos(3)}>page3</button>
        </div>
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
