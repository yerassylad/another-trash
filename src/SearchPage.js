import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import searchPhotos from "./actions/Pohotos/searchPhotos";
import incrementPage from "./actions/Pohotos/incrementPage";
import PhotoStock from "./components/Main/PhotoStock";
import FixedMenu from "./components/Main/FixedMenu";

class SearchPage extends Component {
  searchPhotos = () => {
    const { searchPhotos, page, match } = this.props;
    const query = match.params.search;
    searchPhotos(query, page);
  };

  componentDidMount = () => {
    const { defaultPhotos } = this.props;
    defaultPhotos();
    this.searchPhotos();
  };

  componentWillUnmount = () => {
    const { defaultPhotos } = this.props;
    defaultPhotos();
  };

  render() {
    const { photos } = this.props;

    return (
      <div>
        {/* <FixedMenu />
        <PhotoStock images={photos} appendImages={this.appendSearchPhotos} /> */}
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
      searchPhotos,
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
)(SearchPage);
