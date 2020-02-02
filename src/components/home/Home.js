import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import CartItems from '../cart/cartItems'
import { connect } from 'react-redux'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: []
    }
  }


  handleAddToCart = () => {
    console.log("Product added to cart");
    this.setState(state => {
      const cartItems = state.cartItems;

    })
  }

  render() {
    // console.log(this.props)
    const { products } = this.props;
    return(
      <div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <ProductList  products={products} handleAddToCart={this.handleAddToCart}/>
          </div>
        </div>
        <div className="floatcart-wrapper">
          <div className="floatcart p-5">
            <CartItems />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps)(Home)
