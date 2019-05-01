import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ImageWrapper from "../ImageWithDimmer/ImageWrapper";
import Avatar from "../Avatar";
import DownloadButton from "../DownloadButton";

const MobilePhotoStock = props => {
  const { photos } = props;
  const lastPhotoIndex = photos.length - 1;

  return (
    <div>
      {photos.map((photo, index) => {
        return (
          <div key={photo.id}>
            <div style={{ width: "100%", height: 100, background: "blue" }} />
            <ImageWrapper>
              <Image fluid src={photo.urls.regular} />
            </ImageWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default MobilePhotoStock;
