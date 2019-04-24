import React, { Component } from "react";
import { connect } from "react-redux";
import MobilePhotoStock from "./MobilePhotoStock";
import RegularPhotoStock from "./RegularPhotoStock";
import spreadArray from "../../../libs/spreadArray";

export class PhotoStock extends Component {
  render() {
    const { images, deviceType } = this.props;
    const columns = deviceType;
    if (columns === 1) return <MobilePhotoStock photos={images} />;
    const columnedPhotos = spreadArray(images, columns);
    return (
      <RegularPhotoStock columnedPhotos={columnedPhotos} columns={columns} />
    );
  }
}

const mapStateToProps = state => ({
  deviceType: state.core.deviceType
});

export default connect(mapStateToProps)(PhotoStock);
