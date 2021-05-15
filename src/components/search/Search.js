import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
    doSearch = (e) => {
        this.props.executeSearch(e.target.value);
    }

    render() {
        return(
            <input type="text" placeholder="Search" onChange={this.doSearch} />
        )
    }
}

export default Search;