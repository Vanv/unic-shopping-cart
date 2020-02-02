import React, { Component } from 'react'



class ProductList extends Component {
  render() {
    const { products } = this.props;
    return(
      <div className="card-deck">
        { products && products.map(product => {
          return (
            <div key={product.id}>
              {product.name}
              <br />
              { product.price}
            </div>
          )
        })}
      </div>
    )
  }
}


export default ProductList
