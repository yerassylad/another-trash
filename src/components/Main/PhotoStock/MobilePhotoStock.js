import React from "react";
import { connect } from "react-redux";
import { Segment, Image, Grid } from "semantic-ui-react";
import incrementPage from "../../../actions/Pohotos/incrementPage";
import ImageWrapper from "../ImageDimmer/ImageWrapper";
import Avatar from "../Avatar";
import DownloadButton from "../DownloadButton";
import penultImage from "../../../HOCs/penultImage";
import downloadPhoto from "../../../libs/downloadPhoto";

const MobilePenultImage = penultImage(Image);

const MobilePhotoStock = props => {
  const { photos, incrementPage } = props;
  const penultPhotoIndex = photos.length - 2;

  return (
    <div>
      {photos.map((photo, photoIndex) => {
        return (
          <Segment key={photo.id}>
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
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column textAlign="left">
                  <Avatar
                    avatarUrl={photo.user.profile_image.small}
                    firstName={photo.user.first_name}
                    lastName={photo.user.last_name}
                  />
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <DownloadButton handleClick={downloadPhoto(photo.id)} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        );
      })}
    </div>
  );
};

export default connect(
  null,
  { incrementPage }
)(MobilePhotoStock);
