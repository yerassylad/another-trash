const determineScreenSizes = () => {
  let screenSizes = {
    viewPortWidth: null,
    viewPortHeight: null
  };

  if (typeof window.innerWidth != "undefined") {
    screenSizes.viewPortWidth = window.innerWidth;
    screenSizes.viewPortHeight = window.innerHeight;
  } else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth !== 0
  ) {
    screenSizes.viewPortWidth = document.documentElement.clientWidth;
    screenSizes.viewPortHeight = document.documentElement.clientHeight;
  } else {
    screenSizes.viewPortWidth = document.getElementsByTagName(
      "body"
    )[0].clientWidth;
    screenSizes.viewPortHeight = document.getElementsByTagName(
      "body"
    )[0].clientHeight;
  }

  return screenSizes;
};

export default determineScreenSizes;
