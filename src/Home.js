import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FixedMenu from "./components/Main/FixedMenu";
import clearPhotos from "./actions/Pohotos/clearPhotos";
import getLatestPhotos from "./actions/Pohotos/getLatestPhotos";

export class Home extends Component {
  getLatestPhotos = () => {
    const { getLatestPhotos, page } = this.props;
    getLatestPhotos(page);
  };

  componentDidMount = () => {
    this.getLatestPhotos();
  };

  componentDidUpdate = prevProps => {
    const { page } = this.props;
    if (page !== prevProps.page) {
      this.getLatestPhotos();
    }
  };

  componentWillUnmount = () => {
    const { clearPhotos } = this.props;
    clearPhotos();
  };

  render() {
    return (
      <div style={{ width: "100%", height: 2000 }}>
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
  }
}

const mapStateToProps = state => ({
  page: state.photos.page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearPhotos,
      getLatestPhotos
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
