import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Dimmer, Grid } from "semantic-ui-react";
import ImageWrapper from "./ImageWrapper";
import DimmerContentWrapper from "./DimmerContentWrapper";
import Avatar from "../Avatar";
import DownloadButton from "../DownloadButton";

class ImageWithDimmer extends Component {
  state = {
    isDimmerActive: false
  };

  handleShow = () => this.setState({ isDimmerActive: true });

  handleHide = () => this.setState({ isDimmerActive: false });

  render() {
    const { isDimmerActive } = this.state;
    const { image, handleGoToPhoto, handleDownload } = this.props;

    if (!image) return null;
    return (
      <Dimmer.Dimmable
        as={ImageWrapper}
        dimmed={isDimmerActive}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
      >
        <Image src={image.urls.regular} fluid />
        <Dimmer active={isDimmerActive}>
          <DimmerContentWrapper onClick={handleGoToPhoto}>
            <Grid columns={2}>
              <Grid.Row verticalAlign="bottom">
                <Grid.Column textAlign="left" floated="left">
                  <Avatar
                    avatarUrl={image.user.profile_image.small}
                    firstName={image.user.first_name}
                    lastName={image.user.last_name}
                  />
                </Grid.Column>
                <Grid.Column textAlign="right" floated="right">
                  <DownloadButton
                    handleClick={e => {
                      handleDownload();
                      e.stopPropagation();
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </DimmerContentWrapper>
        </Dimmer>
      </Dimmer.Dimmable>
    );
  }
}

ImageWithDimmer.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  handleGoToPhoto: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired
};

ImageWithDimmer.defaultProps = {
  handleDownload: () => {},
  handleGoToPhoto: () => {}
};

export default ImageWithDimmer;
