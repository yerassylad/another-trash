import React from "react";
import { connect } from "react-redux";
import { Grid, Image } from "semantic-ui-react";
import incrementPage from "../../../actions/Pohotos/incrementPage";
import ImageWrapper from "../ImageDimmer/ImageWrapper";
import Avatar from "../Avatar";
import DownloadButton from "../DownloadButton";
import penultImage from "../../../HOCs/penultImage";

const MobilePenultImage = penultImage(Image);

const MobilePhotoStock = props => {
  const { photos, incrementPage } = props;
  const penultPhotoIndex = photos.length - 2;

  return (
    <div>
      {photos.map((photo, photoIndex) => {
        return (
          <div key={photo.id}>
            <div style={{ width: "100%", height: 100, background: "blue" }} />
            <ImageWrapper>
              {photoIndex === penultPhotoIndex ? (
                <MobilePenultImage
                  onImageVisible={incrementPage}
                  fluid
                  src={photo.urls.regular}
                />
              ) : (
                <Image fluid src={photo.urls.small} />
              )}
            </ImageWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  null,
  { incrementPage }
)(MobilePhotoStock);
