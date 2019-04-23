import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";

const DownloadButton = props => {
  const { handleClick } = props;
  return (
    <Button onClick={handleClick} icon>
      <Icon name="arrow down" />
    </Button>
  );
};

DownloadButton.propTypes = {
  handleClick: PropTypes.func
};

DownloadButton.defaultProps = {
  handleClick: () => {}
};

export default DownloadButton;
