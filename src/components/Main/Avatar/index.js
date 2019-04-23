import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

const Avatar = props => {
  const { avatarUrl, firstName, lastName } = props;
  return (
    <div>
      <Image src={avatarUrl} avatar />
      <span>{`${firstName || ""} ${lastName || ""}`}</span>
    </div>
  );
};

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Avatar;
