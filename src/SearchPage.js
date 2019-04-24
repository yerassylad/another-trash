import React, { Component } from "react";
import PhotoStock from "./components/Main/PhotoStock";
import unsplash from "./api";

class SearchPage extends Component {
  state = {
    images: []
  };

  searchImages = async () => {
    const search = this.props.match.params.search;
    const response = await unsplash.get("/search/photos", {
      params: {
        query: search
      }
    });
    this.setState({ images: response.data.results });
  };

  componentDidMount = () => {
    this.searchImages();
  };

  render() {
    const { images } = this.state;
    return <PhotoStock images={images} />;
  }
}

export default SearchPage;
