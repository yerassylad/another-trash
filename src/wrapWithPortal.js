import React, { Component } from "react";
import ReactDOM from "react-dom";

const wrapWithPortal = WrappedComponent => {
  class Modal extends Component {
    componentWillMount = () => {
      this.root = document.createElement("div");
      this.root.setAttribute("class", "react-portals-modal");
      document.body.appendChild(this.root);
    };

    componentWillUnmount = () => {
      document.body.removeChild(this.root);
    };

    render() {
      return ReactDOM.createPortal(
        <WrappedComponent {...this.props} />,
        this.root
      );
    }
  }

  Modal.displayName = `wrappedWithPortal(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"})`;

  return Modal;
};

export default wrapWithPortal;
