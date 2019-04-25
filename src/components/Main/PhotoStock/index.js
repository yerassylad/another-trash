import React, { Component } from "react";
import { connect } from "react-redux";
import MobilePhotoStock from "./MobilePhotoStock";
import RegularPhotoStock from "./RegularPhotoStock";
import spreadArray from "../../../libs/spreadArray";

export class PhotoStock extends Component {
  render() {
    const { images, deviceType, appendImages } = this.props;

    if (deviceType === 1) return <MobilePhotoStock photos={images} />;
    // device type and columns are equal
    const columnedPhotos = spreadArray(images, deviceType);
    return (
      <RegularPhotoStock
        columnedPhotos={columnedPhotos}
        columns={deviceType}
        appendImages={appendImages}
      />
    );
  }
}

const mapStateToProps = state => ({
  deviceType: state.core.deviceType
});

export default connect(mapStateToProps)(PhotoStock);
