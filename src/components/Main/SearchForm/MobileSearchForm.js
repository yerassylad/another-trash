import React from "react";
import PropTypes from "prop-types";
import { Input, Popup } from "semantic-ui-react";

const MobileSearchForm = props => {
  const {
    isSearchButtonClicked,
    canBeSubmitted,
    value,
    handleSubmit,
    handleChange,
    handleButtonClick,
    handleBlur
  } = props;
  return (
    <Popup
      basic
      open={isSearchButtonClicked && !canBeSubmitted}
      content="Пожалуйста, заполните поле поиска"
      position="bottom center"
      trigger={
        <form
          onSubmit={e => {
            handleSubmit(e);
            handleButtonClick();
          }}
          style={{ width: "100%", marginRight: 10 }}
        >
          <Input
            fluid
            onChange={handleChange}
            value={value}
            onBlur={handleBlur}
            type="search"
            placeholder="search hd photos"
          />
        </form>
      }
    />
  );
};

MobileSearchForm.propTypes = {
  isSearchButtonClicked: PropTypes.bool.isRequired,
  canBeSubmitted: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export default MobileSearchForm;
