import React, { Component } from "react";
import styled from "styled-components";
import wrapWithPortal from "./wrapWithPortal";
import Modal from "./Modal";
import unsplash from "./api";

const PortalledModel = wrapWithPortal(Modal);

const Image = styled("img")`
  display: block;
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
        <Image src={photo.urls.regular} alt={photo.description} />
      </PortalledModel>
    );
  }
}

export default ImagePage;
