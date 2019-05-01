import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import ImageDimmer from "../ImageDimmer";
import penultImage from "../../../HOCs/penultImage";
import incrementPage from "../../../actions/Pohotos/incrementPage";

const PenulImage = penultImage(Image);

const RegularPhotoStock = props => {
  const { columnedPhotos, columns } = props;

  return (
    <Grid>
      <Grid.Row columns={columns}>
        {columnedPhotos.map((column, columnIndex) => {
          const columnPenultPhotoIndex = column.length - 2;
          return (
            <Grid.Column key={columnIndex}>
              {column.map((photo, photoIndex) => {
                if (columnPenultPhotoIndex === photoIndex) {
                  return (
                    <ImageDimmer user={photo.user}>
                      <PenulImage
                        onImageVisible={props.incrementPage}
                        src={photo.urls.small}
                      />
                    </ImageDimmer>
                  );
                }
                return (
                  <ImageDimmer user={photo.user}>
                    <Image src={photo.urls.small} />
                  </ImageDimmer>
                );
              })}
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default connect(
  null,
  { incrementPage }
)(RegularPhotoStock);
