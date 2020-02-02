import React, { Component } from 'react'


class CartItems extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(this.props);
    return(
      <h4>Cart Items </h4>
    )
  }
}

export default CartItems
