import React, { Component } from "react";
import { Input, Button, Label } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

export class Search extends Component {
  state = {
    search: "",
    searchButtonClicked: false
  };

  handleChange = e => this.setState({ search: e.target.value });

  handleBlur = () =>
    this.setState({ touched: true, searchButtonClicked: false });

  canBeSubmitted = () => {
    const { search } = this.state;
    const error = search.length === 0;
    return !error;
  };

  handleSearch = e => {
    const { history } = this.props;
    const { search } = this.state;
    const canBeSubmitted = this.canBeSubmitted();
    e.preventDefault();
    if (!canBeSubmitted) {
      return;
    }
    history.push(`/search/${search}`);
  };

  handleButtonClick = () => this.setState({ searchButtonClicked: true });

  render() {
    const { search, searchButtonClicked } = this.state;
    const canBeSubmitted = this.canBeSubmitted();
    return (
      <form onSubmit={this.handleSearch}>
        <Input
          fluid
          onChange={e => this.setState({ search: e.target.value })}
          value={search}
          onBlur={this.handleBlur}
          type="text"
          placeholder="search hd photos"
          action
        >
          <input />
          <Button onClick={this.handleButtonClick} type="submit">
            search
          </Button>
        </Input>
        {searchButtonClicked && !canBeSubmitted && (
          <Label pointing>fill out</Label>
        )}
      </form>
    );
  }
}

export default withRouter(Search);
