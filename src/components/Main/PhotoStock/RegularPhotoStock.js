import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import TestDimmer from "../ImageWithDimmer/TestDimmer";
import penultImage from "../../../HOCs/penultImage";

const PenultImage = penultImage(Image);

const ImageWithDimmer = props => {
  const { user, imageSrc, goTo } = props;
  return (
    <TestDimmer
      user={user}
      handleGoToPhoto={goTo}
      handleDownload={() => console.log("download button")}
    >
      <Image src={imageSrc} fluid />
    </TestDimmer>
  );
};

const PenultImageWithDimmer = props => {
  const { user, imageSrc, onImageVisible } = props;

  return (
    <TestDimmer user={user}>
      <PenultImage src={imageSrc} onImageVisible={onImageVisible} fluid />
    </TestDimmer>
  );
};

const RegularPhotoStock = props => {
  const { columnedPhotos, columns, appendImages, history } = props;

  const goToFn = id => () => {
    history.push({
      pathname: `/img/${id}`,
      state: {
        modal: true
      }
    });
  };

  return (
    <Grid>
      <Grid.Row columns={columns}>
        {columnedPhotos.map((column, columnIndex) => (
          <Grid.Column key={columnIndex}>
            {column.map((photo, photoIndex) => {
              if (column.length - 1 === photoIndex) {
                return (
                  <PenultImageWithDimmer
                    key={photo.id}
                    imageSrc={photo.urls.regular}
                    user={{
                      avatarUrl: photo.user.profile_image.small,
                      firstName: photo.user.first_name,
                      lastName: photo.user.last_name
                    }}
                    onImageVisible={appendImages}
                  />
                );
              } else {
                return (
                  <ImageWithDimmer
                    key={photo.id}
                    imageSrc={photo.urls.regular}
                    user={{
                      avatarUrl: photo.user.profile_image.small,
                      firstName: photo.user.first_name,
                      lastName: photo.user.last_name
                    }}
                    goTo={goToFn(photo.id)}
                  />
                );
              }
            })}
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default withRouter(RegularPhotoStock);
