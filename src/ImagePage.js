import React, { Component } from "react";
import wrapWithPortal from "./HOCs/wrapWithPortal";
import Modal from "./components/Main/Modal";
import unsplash from "./api";
import Avatar from "./components/Main/Avatar";
import DownloadButton from "./components/Main/DownloadButton";
import Stat from "./components/Main/Stat";
import { Grid, Container, Image } from "semantic-ui-react";
import {
  ImagePageHeader,
  ImagePageStickyContainer,
  ImagePageStats
} from "./components/Main/ImagePageComponents";
import downloadPhoto from "./libs/downloadPhoto";

const PortalledModel = wrapWithPortal(Modal);

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

  _downloadPhoto = downloadPhoto;

  render() {
    const { photo } = this.state;

    if (!photo) return null;
    return (
      <PortalledModel handleClose={this._handleClose}>
        <div>
          <ImagePageStickyContainer>
            <ImagePageHeader>
              <Grid verticalAlign="middle" columns={2}>
                <Grid.Column textAlign="left">
                  <Avatar
                    avatarUrl={photo.user.profile_image.small}
                    firstName={photo.user.first_name}
                    lastName={photo.user.last_name}
                  />
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <DownloadButton handleClick={this._downloadPhoto(photo.id)} />
                </Grid.Column>
              </Grid>
            </ImagePageHeader>
          </ImagePageStickyContainer>
          <Image src={photo.urls.regular} fluid />
        </div>
        <ImagePageStats>
          <Container>
            <Grid stackable columns={3} textAlign="center">
              <Grid.Column>
                <Stat iconName="eye" value={photo.views} label="Просмотров" />
              </Grid.Column>
              <Grid.Column>
                <Stat
                  iconName="download"
                  value={photo.downloads}
                  label="Скачиваний"
                />
              </Grid.Column>
              <Grid.Column>
                <Stat iconName="like" value={photo.likes} label="Лайки" />
              </Grid.Column>
            </Grid>
          </Container>
        </ImagePageStats>
      </PortalledModel>
    );
  }
}

export default ImagePage;
