import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import CartItems from '../cart/cartItems'
import { connect } from 'react-redux'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      isOpen: false
    }
  }


  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productExistInShoppingCart = false;

      cartItems.forEach( c => {
        if(c.id === product.id) {
          c.count += 1;
          productExistInShoppingCart = true;
        }
      });

      if(!productExistInShoppingCart) {
        cartItems.push({...product, count: 1});
      }
      return { cartItems};
    });
  }

  handleRemoveItem = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(r => r.id !== product.id);
      return { cartItems}
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
          {this.state.cartItems.length > 0 && (
            <div className="floatcart p-5">
              <CartItems cartItems={this.state.cartItems} handleRemoveItem={this.handleRemoveItem} />
            </div>
          )}
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
