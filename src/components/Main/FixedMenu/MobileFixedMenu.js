import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import searchForm from "../../../HOCs/searchForm";
import MobileSearchForm from "../SearchForm/MobileSearchForm";
import TextButton from "../TextButton";

const MobileSearch = searchForm(MobileSearchForm);

export class MobileFixedMenu extends Component {
  state = {
    isSearchOpen: false
  };

  handleOpenSearch = () => this.setState({ isSearchOpen: true });

  handleCloseSearch = () => this.setState({ isSearchOpen: false });

  render() {
    const { isSearchOpen } = this.state;
    const { isHomeDisabled, goHome } = this.props;
    return (
      <div>
        <Menu style={{ height: 40 }} fixed="top" borderless>
          <Menu.Item disabled={isHomeDisabled} onClick={goHome}>
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

export default MobileFixedMenu;
