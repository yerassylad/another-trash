import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const CloseButton = styled("button")`
  position: relative;
  background-color: transparent;
  color: ${props => (props.color ? props.color : "white")};
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  text-transform: none;
  cursor: pointer;
  :hover {
    box-shadow: none;
  }
`;

const ModalRoot = styled("div")`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 250;
  background-color: rgba(0, 0, 0, 0.6);
  backface-visibility: hidden;
  overflow: auto;
  cursor: zoom-out;
`;

const ModalInner = styled("div")`
  cursor: default;
  min-height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 120px 80px;
  outline: none;
`;

const ModalCloseButtonPlaceholder = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 8px;
  margin-left: 8px;
  color: #fff;
  cursor: pointer;
`;

const ModalContentContainer = styled("div")`
  align-self: flex-start;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  min-width: 0;
  min-height: 100;
`;

const Modal = props => {
  const { handleClose, children } = props;

  return (
    <ModalRoot>
      <ModalInner>
        <ModalCloseButtonPlaceholder>
          <CloseButton onClick={handleClose}>
            <Icon name="close" size="large" />
          </CloseButton>
        </ModalCloseButtonPlaceholder>
        <ModalContentContainer>{children}</ModalContentContainer>
      </ModalInner>
    </ModalRoot>
  );
};

export default Modal;
