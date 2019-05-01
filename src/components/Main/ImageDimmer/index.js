import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dimmer, Grid } from "semantic-ui-react";
import ImageWrapper from "./ImageWrapper";
import DimmerContentWrapper from "./DimmerContentWrapper";
import Avatar from "../Avatar";
import DownloadButton from "../DownloadButton";

class ImageDimmer extends Component {
  state = {
    isDimmerActive: false
  };

  handleShow = () => this.setState({ isDimmerActive: true });

  handleHide = () => this.setState({ isDimmerActive: false });

  render() {
    const { isDimmerActive } = this.state;

    const { user, handleGoToPhoto, handleDownload, children } = this.props;

    return (
      <Dimmer.Dimmable
        as={ImageWrapper}
        dimmed={isDimmerActive}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
      >
        {children}
        <Dimmer
          style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 100 }}
          active={isDimmerActive}
        >
          <DimmerContentWrapper onClick={handleGoToPhoto}>
            <Grid columns={2}>
              <Grid.Column textAlign="left">
                <Avatar
                  avatarUrl={user.profile_image.small}
                  firstName={user.first_name}
                  lastName={user.last_name}
                />
              </Grid.Column>
              <Grid.Column textAlign="right">
                <DownloadButton
                  handleClick={e => {
                    handleDownload();
                    e.stopPropagation();
                  }}
                />
              </Grid.Column>
            </Grid>
          </DimmerContentWrapper>
        </Dimmer>
      </Dimmer.Dimmable>
    );
  }
}

ImageDimmer.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  handleGoToPhoto: PropTypes.func.isRequired.isRequired,
  handleDownload: PropTypes.func.isRequired.isRequired
};

export default ImageDimmer;
