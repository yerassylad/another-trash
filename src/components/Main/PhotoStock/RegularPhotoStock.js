import React from "react";
import { Grid } from "semantic-ui-react";
import ImageWithDimmer from "../ImageWithDimmer";

const RegularPhotoStock = props => {
  const { columnedPhotos, columns } = props;
  return (
    <Grid>
      <Grid.Row columns={columns}>
        {columnedPhotos.map((column, index) => (
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
};

export default RegularPhotoStock;
