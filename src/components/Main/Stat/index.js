import React from "react";
import PropTypes from "prop-types";
import { Statistic, Icon } from "semantic-ui-react";

const Stat = props => {
  const { iconName, value, label } = props;
  return (
    <Statistic>
      <Statistic.Value>
        <Icon name={iconName} />
        {value}
      </Statistic.Value>
      <Statistic.Label>{label}</Statistic.Label>
    </Statistic>
  );
};

Stat.propTypes = {
  iconName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default Stat;
