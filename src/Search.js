import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Search extends Component {
  state = {
    search: "",
    searchButtonClicked: false
  };

  handleChange = e => this.setState({ search: e.target.value });

  canBeSubmitted = () => {
    const { search } = this.state;
    const error = search.length === 0;
    return !error;
  };

  handleSearch = e => {
    const { history } = this.props;
    const { search } = this.state;
    const canBeSubmitted = this.canBeSubmitted();
    if (!canBeSubmitted) {
      e.preventDefault();
      return;
    }
    history.push(`/search/${search}`);
  };

  render() {
    const { search, searchButtonClicked } = this.state;
    const canBeSubmitted = this.canBeSubmitted();
    return (
      <form onSubmit={this.handleSearch}>
        <input
          value={search}
          onBlur={() =>
            this.setState({ touched: true, searchButtonClicked: false })
          }
          onChange={this.handleChange}
        />
        <button onClick={() => this.setState({ searchButtonClicked: true })}>
          search
        </button>
        {searchButtonClicked && !canBeSubmitted && (
          <span>please fill out search field</span>
        )}
      </form>
    );
  }
}

export default withRouter(Search);
