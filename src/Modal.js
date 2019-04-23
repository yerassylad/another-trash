import React from "react";
import injectSheet from "react-jss";

const styles = {
  modal: {
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    background: "rgba(0,0,0,0.6)",
    backfaceVisibility: "hidden",
    overflow: "auto",
    cursor: "zoom-out"
  },
  modalInner: {
    cursor: "default",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "20px 120px 80px",
    outline: "none"
  },
  closeButton: {
    position: "fixed",
    top: 0,
    left: 0,
    marginTop: "8px",
    marginLeft: "8px",
    color: "#fff",
    cursor: "pointer"
  },
  imageContainer: {
    alignSelf: "flex-start",
    flexGrow: 1,
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 8px 16px rgba(0,0,0,.15)",
    minWidth: 0,
    minHeight: 100
  },
  img: {
    display: "block"
  }
};

let Modal = props => {
  const { handleClose, classes, children } = props;

  return (
    <div className={classes.modal}>
      <div className={classes.modalInner}>
        <div onClick={handleClose} className={classes.closeButton}>
          X
        </div>
        <div className={classes.imageContainer}>{children}</div>
      </div>
    </div>
  );
};

Modal = injectSheet(styles)(Modal);
export default Modal;
