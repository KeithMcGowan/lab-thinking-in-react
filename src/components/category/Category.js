import React, { Component } from 'react';
import './Category.css';
import ProductRow from '../productRow/ProductRow.js';

class Category extends Component {
  render() {
    // console.log(this.props);
    const filteredProducts = this.props.products.filter((product) => {
      return product.category === this.props.category;
    });

    // console.log(filteredProducts);

    return (
      <div>
        <h2>{this.props.category}</h2>
        {filteredProducts.map((product) => {
          return <ProductRow {...product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Category;
