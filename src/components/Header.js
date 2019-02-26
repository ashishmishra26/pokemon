import React, { Component } from 'react'
import SearchBox from './SearchBox';

export default class Header extends Component {
  render() {
    let { searchText, handleSearchText } = this.props;
    return (
      <div className="app-header">
        <SearchBox searchText={searchText} handleSearchText={handleSearchText} />
      </div>
    )
  }
}
