import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import searchPhotos from "./actions/Pohotos/searchPhotos";
import incrementPage from "./actions/Pohotos/incrementPage";
import clearPhotos from "./actions/Pohotos/clearPhotos";
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

  componentDidUpdate = prevProps => {
    const { page } = this.props;
    if (page !== prevProps.page) {
      this.searchPhotos();
    }
  };

  componentWillUnmount = () => {
    const { clearPhotos } = this.props;
    clearPhotos();
  };

  render() {
    // return <PhotoStock images={images} />;
    const { incrementPage } = this.props;
    return (
      <div>
        <div>search page</div>
        <div>
          <button onClick={incrementPage}>incerment page</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.photos.page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchPhotos, incrementPage, clearPhotos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
