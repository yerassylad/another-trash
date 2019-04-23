import React, { Component } from "react";
import styled from "styled-components";
import wrapWithPortal from "./wrapWithPortal";
import Modal from "./Modal";
import unsplash from "./api";
import Avatar from "./components/Main/Avatar";
import DownloadButton from "./components/Main/DownloadButton";
import { Grid } from "semantic-ui-react";

const PortalledModel = wrapWithPortal(Modal);

const Image = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
`;

export class ImagePage extends Component {
  state = {
    photo: null
  };

  componentDidMount = () => {
    this._getSinglePhoto();
  };

  _getSinglePhoto = async () => {
    const { id } = this.props.match.params;
    const response = await unsplash(`/photos/${id}`);
    this.setState({
      photo: response.data
    });
  };

  _handleClose = e => {
    const { history } = this.props;
    e.stopPropagation();
    history.goBack();
  };

  render() {
    const { photo } = this.state;
    console.log("imagepage props", this.props);

    if (!photo) return null;
    return (
      <PortalledModel handleClose={this._handleClose}>
        <div>
          <div
            style={{
              position: "-webkit-sticky",
              position: "sticky",
              top: 0
            }}
          >
            <div
              style={{
                padding: 20,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                backgroundColor: "#fff"
              }}
            >
              <Grid verticalAlign="middle" columns={2}>
                <Grid.Column floated="left" textAlign="left">
                  <Avatar
                    avatarUrl={photo.user.profile_image.small}
                    firstName={photo.user.first_name}
                    lastName={photo.user.last_name}
                  />
                </Grid.Column>
                <Grid.Column floated="right" textAlign="right">
                  <DownloadButton handleClick={() => console.log(photo)} />
                </Grid.Column>
              </Grid>
            </div>
          </div>
          <Image src={photo.urls.regular} alt={photo.description} />
        </div>
        <div style={{ width: "100%", height: 1000, background: "lightblue" }} />
      </PortalledModel>
    );
  }
}

export default ImagePage;
