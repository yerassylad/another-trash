import React from "react";
import injectSheet from "react-jss";
import wrapWithPortal from "./wrapWithPortal";

const IMAGES = [
  {
    id: 0,
    url: "https://pp.userapi.com/c540100/v540100321/6a1ff/CJCO9qy1Vb0.jpg"
  },
  {
    id: 1,
    url: "https://pp.userapi.com/c846323/v846323472/1cc876/sgfEorVQqHc.jpg"
  }
];

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
    display: "flex",
    justifyContent: "center"
  },
  img: {
    display: "block"
  }
};

let Modal = props => {
  const { match, history, classes } = props;

  const image = IMAGES[parseInt(match.params.id, 10)];
  if (!image) return null;
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modalInner}>
        <div onClick={back} className={classes.closeButton}>
          X
        </div>
        <div className={classes.imageContainer}>
          <img src={image.url} className={classes.img} alt="asd" />
        </div>
      </div>
    </div>
  );
};

Modal = injectSheet(styles)(Modal);
Modal = wrapWithPortal(Modal);
export default Modal;
