import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Search extends Component {
  state = {
    search: ""
  };

  handleChange = e => this.setState({ search: e.target.value });

  handleSearch = () => {
    const { history } = this.props;
    const { search } = this.state;
    history.push(`/search/${search}`);
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <input value={search} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSearch}>
          search
        </button>
      </div>
    );
  }
}

export default withRouter(Search);
