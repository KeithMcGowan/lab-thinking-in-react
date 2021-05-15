import React, { Component } from 'react';
import './FullTable.css';
import data from '../../data.json';
import ProductTable from '../productTable/ProductTable';
import Search from '../search/Search';

class FullTable extends Component {
    state={
        products: data.data,
        allProducts: data.data,
    }

    filteredResults = (searchTerm) => {
        const copy = [...this.state.allProducts];
        const results = copy.filter((product) => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        this.setState({ products: results });
    }

  render() {
    // console.log("Here's the data ", data);
    return (
      <div className="full-table">
        <Search executeSearch={this.filteredResults} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FullTable;
