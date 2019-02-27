import React, { Component } from 'react'
import SearchBox from './SearchBox';

export default class Header extends Component {
  render() {
    let { searchText, handleSearchText } = this.props;
    return (
      <div className="app-header">
        <h2 id="title">Pokemons</h2>
        <SearchBox searchText={searchText} handleSearchText={handleSearchText} />
      </div>
    )
  }
}
