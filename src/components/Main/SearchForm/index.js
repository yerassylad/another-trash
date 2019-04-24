import React from "react";
import PropTypes from "prop-types";
import { Input, Button, Label } from "semantic-ui-react";

const SearchForm = props => {
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
    <form onSubmit={handleSubmit}>
      <Input
        fluid
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
        type="text"
        placeholder="search hd photos"
        action
      >
        <input />
        <Button onClick={handleButtonClick} type="submit">
          search
        </Button>
      </Input>
      {isSearchButtonClicked && !canBeSubmitted && (
        <Label pointing>fill out</Label>
      )}
    </form>
  );
};

SearchForm.propTypes = {
  isSearchButtonClicked: PropTypes.bool.isRequired,
  canBeSubmitted: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export default SearchForm;
