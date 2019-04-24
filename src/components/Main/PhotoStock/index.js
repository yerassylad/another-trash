import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ImageWithDimmer from "../ImageWithDimmer";
import spreadArray from "../../../libs/spreadArray";

export class PhotoStock extends Component {
  render() {
    const { images } = this.props;
    const spreadedPhotos = spreadArray(images, 3);
    return (
      <Grid>
        <Grid.Row columns={3}>
          {spreadedPhotos.map((column, index) => (
            <Grid.Column key={index}>
              {column.map(photo => (
                <ImageWithDimmer
                  key={photo.id}
                  imageSrc={photo.urls.regular}
                  user={{
                    avatarUrl: photo.user.profile_image.small,
                    firstName: photo.user.first_name,
                    lastName: photo.user.last_name
                  }}
                />
              ))}
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

export default PhotoStock;
