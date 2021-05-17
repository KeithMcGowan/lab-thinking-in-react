import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  doSearch = (e) => {
    this.props.executeSearch(e.target.value);
  };

  render() {
    return (
      <div className="search-results">
        <label className="search-name">Search</label>
        <input className="search-box" type="text" placeholder="Search for items..." onChange={this.doSearch} />
        <div className="checkbox">
          <input type="checkbox" className="check" />
          <label htmlFor="check" className="check">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default Search;
