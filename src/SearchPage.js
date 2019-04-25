import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import searchPhotos from "./actions/Pohotos/searchPhotos";
import incrementPage from "./actions/Pohotos/incrementPage";
import clearPhotos from "./actions/Pohotos/clearPhotos";
import toPageOne from "./actions/Pohotos/toPageOne";
import PhotoStock from "./components/Main/PhotoStock";

class SearchPage extends Component {
  searchPhotos = () => {
    const { searchPhotos, page, match } = this.props;
    const query = match.params.search;
    searchPhotos(query, page);
  };

  componentDidMount = () => {
    this.searchPhotos();
  };

  componentWillUnmount = () => {
    const { clearPhotos, toPageOne } = this.props;
    toPageOne();
    clearPhotos();
  };

  render() {
    const { incrementPage, photos } = this.props;
    return (
      <div>
        <div>
          <button onClick={incrementPage}>incerment page</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>
          <PhotoStock images={photos} />
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
    { searchPhotos, incrementPage, clearPhotos, toPageOne },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
