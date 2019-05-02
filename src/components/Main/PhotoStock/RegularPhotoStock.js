import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ImageDimmer from "../ImageDimmer";
import penultImage from "../../../HOCs/penultImage";
import incrementPage from "../../../actions/Pohotos/incrementPage";
import Wrapper from "../Wrapper";

const PenultImage = penultImage(Image);

const RegularPhotoStock = props => {
  const { columnedPhotos, columns, history, incrementPage } = props;

  const handleGoToPhotoFn = photoID => () => {
    history.push({
      pathname: `/img/${photoID}`,
      state: { modal: true }
    });
  };

  return (
    <Wrapper>
      <Grid>
        <Grid.Row columns={columns}>
          {columnedPhotos.map((column, columnIndex) => {
            const columnPenultPhotoIndex = column.length - 2;
            return (
              <Grid.Column key={columnIndex}>
                {column.map((photo, photoIndex) => {
                  if (columnPenultPhotoIndex === photoIndex) {
                    return (
                      <ImageDimmer
                        key={photo.id}
                        handleGoToPhoto={handleGoToPhotoFn(photo.id)}
                        user={photo.user}
                      >
                        <PenultImage
                          onImageVisible={incrementPage}
                          src={photo.urls.small}
                          fluid
                        />
                      </ImageDimmer>
                    );
                  }
                  return (
                    <ImageDimmer
                      key={photo.id}
                      handleGoToPhoto={handleGoToPhotoFn(photo.id)}
                      user={photo.user}
                    >
                      <Image fluid src={photo.urls.small} />
                    </ImageDimmer>
                  );
                })}
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </Wrapper>
  );
};

export default withRouter(
  connect(
    null,
    { incrementPage }
  )(RegularPhotoStock)
);

// props.incrementPage
