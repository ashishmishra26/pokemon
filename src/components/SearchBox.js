import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
          <form>
            <input
              type="text"
              placeholder="Search..."
              value={this.props.searchText}
              className="search-box"
              onChange={(e)=>{ this.handleSearchTextChange(e)}}
            />
          </form>
        );
      }

      handleSearchTextChange (e) {
        this.props.handleSearchText(e.target.value);
      }
}
