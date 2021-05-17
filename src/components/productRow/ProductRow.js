import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
  render() {
    const stocked = this.props.stocked;
    const styleObj = { color: stocked ? 'black' : 'red' };
    // console.log(styleObj);
    return (
      <div className="product-row">
        <div className="product-name">
          <p style={styleObj}>{this.props.name}</p>
        </div>
        <div className="product-price">
          <p style={styleObj}>{this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default ProductRow;
