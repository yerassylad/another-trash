import React, { Component } from "react";
import IntersectionVisible from "react-intersection-visible";
import getDisplayName from "./getDisplayName";

const penultImage = WrappedComponent => {
  class PenultImage extends Component {
    state = { isLoaded: false };

    handleOnLoad = () => this.setState({ isLoaded: true });

    handleOnShow = () => {
      const { isLoaded } = this.state;
      const { onImageVisible } = this.props;
      if (isLoaded) {
        onImageVisible();
      }
    };

    render() {
      const { onImageVisible, ...rest } = this.props;
      return (
        <IntersectionVisible onShow={this.handleOnShow}>
          <WrappedComponent onLoad={this.handleOnLoad} {...rest} />
        </IntersectionVisible>
      );
    }
  }

  PenultImage.displayName = `PenultImage(${getDisplayName(WrappedComponent)})`;

  return PenultImage;
};

export default penultImage;
