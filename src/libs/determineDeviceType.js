const determineDeviceType = screenWidth => {
  const desktopTablet = 991;
  const tabletMobile = 768;
  if (screenWidth > desktopTablet) {
    return 3;
  } else if (screenWidth <= desktopTablet && screenWidth > tabletMobile) {
    return 2;
  } else if (screenWidth <= tabletMobile) {
    return 1;
  }
};

// 3 - desktop, 2 -tablet, 1 - mobile

export default determineDeviceType;
