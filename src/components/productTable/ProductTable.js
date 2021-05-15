import React, { Component } from 'react';
import './ProductTable.css';
import Category from "../category/Category";

class ProductTable extends Component {
    render() {
        // console.log("products", this.props.products);

        const categories = {};
        this.props.products.forEach((productObj) => {
                categories[productObj.category] = true;
        // productObj.category = "electronics" or "sporting goods"
        })
        const categoryArray = Object.keys(categories);

        // console.log(categoryArray);

        return(
            <div style={{border:"1px solid blue"}}>
                {categoryArray.map((category) => {
                    return <Category key={category} category={category} products={this.props.products} />
                })}

                {/* {this.props.products.data.map((product) => {
                   return <ProductRow {...product} key={product.id} />
                })} */}
            </div>
        )
    }
}

export default ProductTable;