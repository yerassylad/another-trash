import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import searchPhotos from "./actions/Pohotos/searchPhotos";
import incrementPage from "./actions/Pohotos/incrementPage";
import clearPhotos from "./actions/Pohotos/clearPhotos";
import toPageOne from "./actions/Pohotos/toPageOne";
import PhotoStock from "./components/Main/PhotoStock";
import FixedMenu from "./components/Main/FixedMenu";

class SearchPage extends Component {
  searchPhotos = () => {
    const { searchPhotos, match, page } = this.props;
    const query = match.params.search;
    searchPhotos(query, page);
  };

  cleanSearchedPhotos = () => {
    const { clearPhotos, toPageOne } = this.props;
    toPageOne();
    clearPhotos();
  };

  appendSearchPhotos = () => {
    const { incrementPage, searchPhotos, match, page } = this.props;
    const query = match.params.search;
    incrementPage();
    searchPhotos(query, page + 1);
  };

  componentDidMount = () => {
    const { page } = this.props;
    console.log("pagepagepage", page);

    if (page === 1) {
      this.searchPhotos();
    }
  };

  componentDidUpdate = prevProps => {
    const { page } = this.props;
    if (prevProps.page !== 1 && page === 1) {
      this.searchPhotos();
    }
  };

  componentWillUpdate = nextProps => {
    const { match } = this.props;
    console.log("query", match.params.search, nextProps.match.params.search);

    if (match.params.search !== nextProps.match.params.search) {
      this.forceUpdate();
    }
  };

  componentWillUnmount = () => {
    this.cleanSearchedPhotos();
  };

  render() {
    const { photos } = this.props;

    return (
      <div>
        <FixedMenu />
        <PhotoStock images={photos} appendImages={this.appendSearchPhotos} />
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
    { searchPhotos, incrementPage, clearPhotos, toPageOne },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
