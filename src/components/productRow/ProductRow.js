import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
    render() {
        const stocked = this.props.stocked;
        const styleObj = {color: stocked ? "black" : "red"};
        console.log(styleObj);
        return(
            <div>
                <p style={styleObj}>{this.props.name}</p>
            </div>
        )
    }
}

export default ProductRow;