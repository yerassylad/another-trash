import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchForm from "./components/Main/SearchForm";

export class Search extends Component {
  state = {
    searchValue: "",
    isSearchButtonClicked: false
  };

  handleChange = e => this.setState({ searchValue: e.target.value });

  handleBlur = () => this.setState({ isSearchButtonClicked: false });

  canBeSubmitted = () => {
    const { searchValue } = this.state;
    const error = searchValue.length === 0;
    return !error;
  };

  handleSubmit = e => {
    const { history } = this.props;
    const { searchValue } = this.state;
    const canBeSubmitted = this.canBeSubmitted();
    e.preventDefault();
    if (!canBeSubmitted) {
      return;
    }
    history.push(`/search/${searchValue}`);
  };

  handleButtonClick = () => this.setState({ isSearchButtonClicked: true });

  render() {
    const { searchValue, isSearchButtonClicked } = this.state;
    const canBeSubmitted = this.canBeSubmitted();
    return (
      <SearchForm
        handleSubmit={this.handleSubmit}
        canBeSubmitted={canBeSubmitted}
        isSearchButtonClicked={isSearchButtonClicked}
        value={searchValue}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
        handleButtonClick={this.handleButtonClick}
      />
    );
  }
}

export default withRouter(Search);
