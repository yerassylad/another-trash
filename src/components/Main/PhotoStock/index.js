import React, { Component } from "react";
import MobilePhotoStock from "./MobilePhotoStock";
import RegularPhotoStock from "./RegularPhotoStock";
import spreadArray from "../../../libs/spreadArray";

export class PhotoStock extends Component {
  render() {
    const { images } = this.props;
    const columns = 3;
    if (columns === 1) return <MobilePhotoStock photos={images} />;
    const columnedPhotos = spreadArray(images, columns);
    return <RegularPhotoStock columnedPhotos={columnedPhotos} />;
  }
}

export default PhotoStock;
