import React from "react";
import { connect } from "react-redux";
import MobilePhotoStock from "./MobilePhotoStock";
import RegularPhotoStock from "./RegularPhotoStock";
import spreadArray from "../../../libs/spreadArray";

const PhotoStock = props => {
  const { images, deviceType } = props;

  if (deviceType === 1) return <MobilePhotoStock photos={images} />; // device type and columns are equal

  const columnedPhotos = spreadArray(images, deviceType);
  return (
    <RegularPhotoStock columnedPhotos={columnedPhotos} columns={deviceType} />
  );
};

const mapStateToProps = state => ({
  deviceType: state.core.deviceType,
  photos: state.photos.photos
});

export default connect(mapStateToProps)(PhotoStock);
