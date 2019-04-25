export default photos => {
  return {
    type: "APPEND_PHOTOS",
    payload: photos
  };
};
