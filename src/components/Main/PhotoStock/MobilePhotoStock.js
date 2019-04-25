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
          <ImageWrapper key={photo.id}>
            <Grid columns={2}>
              <Grid.Column textAlign="left">
                <Avatar
                  avatarUrl={photo.user.profile_image.small}
                  firstName={photo.user.first_name}
                  lastName={photo.user.last_name}
                />
                with sensor
              </Grid.Column>
              <Grid.Column textAlign="right">
                <DownloadButton
                  handleClick={() =>
                    console.log("mbile photostack download button")
                  }
                />
              </Grid.Column>
              <Image
                onLoad={() => console.log("image loaded with", photo.id)}
                fluid
                src={photo.urls.regular}
              />
            </Grid>
          </ImageWrapper>
        );
      })}
    </div>
  );
};

export default MobilePhotoStock;
