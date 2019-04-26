import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import styled from "styled-components";
import searchForm from "./HOCs/searchForm";
import MobileSearchForm from "./components/Main/SearchForm/MobileSearchForm";

const MobileSearch = searchForm(MobileSearchForm);

const TextButton = styled("button")`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export class Janym extends Component {
  state = {
    isSearchOpen: false
  };

  handleOpenSearch = () => this.setState({ isSearchOpen: true });

  handleCloseSearch = () => this.setState({ isSearchOpen: false });

  render() {
    const { isSearchOpen } = this.state;
    return (
      <div>
        <Menu style={{ height: 40 }} fixed="top" borderless>
          <Menu.Item>
            <Icon name="home" size="big" />
          </Menu.Item>
          {!isSearchOpen && (
            <Menu.Item onClick={this.handleOpenSearch}>
              <Icon name="search" size="big" />
            </Menu.Item>
          )}
          {isSearchOpen && (
            <Menu.Item style={{ flexGrow: 1 }}>
              <MobileSearch />
              <TextButton onClick={this.handleCloseSearch}>Отменить</TextButton>
            </Menu.Item>
          )}
        </Menu>
        <div style={{ height: 40 }} />
      </div>
    );
  }
}

export default Janym;
