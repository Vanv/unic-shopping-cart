import React, { Component } from 'react'



class ProductList extends Component {
  render() {
    const { products } = this.props;
    return(
      <div className="card-deck">
        { products && products.map(product => {
          return (
            <div key={product.id}>
            <div className="card mb-4">
            <img className="card-img-top" src="https://fakeimg.pl/200x200" alt="Product" />

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text float-right"><small>$</small><span className="product-price">{(product.price).toFixed(2)}</span></p>
                <div>
                  <button type="button" onClick={(e) => this.props.handleAddToCart(e, product) } className="btn btn-dark btn-lg btn-block">Add to Cart</button>
                </div>
              </div>
            </div>
           </div>
          )
        })}
      </div>
    )
  }
}


export default ProductList
