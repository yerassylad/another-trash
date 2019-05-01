import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import searchPhotos from "./actions/Pohotos/searchPhotos";
import incrementPage from "./actions/Pohotos/incrementPage";
import defaultPhotos from "./actions/Pohotos/defaultPhotos";
import PhotoStock from "./components/Main/PhotoStock";
import FixedMenu from "./components/Main/FixedMenu";

class SearchPage extends Component {
  makeSearchPhotos = () => {
    const { searchPhotos, page, match } = this.props;
    const query = match.params.search;
    searchPhotos(query, page);
  };

  componentDidMount = () => {
    const { dirty } = this.props;
    if (!dirty) {
      this.makeSearchPhotos();
    }
  };

  componentDidUpdate = prevProps => {
    const { dirty, page, match, defaultPhotos } = this.props;
    if (prevProps.dirty && !dirty) {
      this.makeSearchPhotos();
    }
    if (dirty && prevProps.page !== page) {
      this.makeSearchPhotos();
    }
    if (match.params.search !== prevProps.match.params.search) {
      defaultPhotos();
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
        <PhotoStock images={photos} appendImages={this.appendSearchPhotos} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.props.incrementPage}>append</button>
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
      searchPhotos,
      incrementPage,
      defaultPhotos
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
