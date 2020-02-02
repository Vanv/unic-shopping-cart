import React, { Component } from 'react'
import { FaCartPlus } from "react-icons/fa";

class CartItems extends Component {
  render() {
    const { cartItems } = this.props;
    return(
      <div>
        <p className="text-center cartIcon"> <FaCartPlus /><span className="pl-1"> Cart</span> </p>
        { cartItems.length === 0 ? "Your cart is empty"
          : <div className="cartLength">
            <span className="rounded px-2 py-1 ">
            {cartItems.length}</span> item{cartItems.length > 1 && 's'} in your cart</div>}

            { cartItems.length > 0 &&
              <div className="mt-3">
                  <ul>
                    {cartItems.map(item => (
                      <li key={item.id}>
                        <div className="clearfix">
                          <div className="float-left">
                            <b>{item.name}</b>
                            <p>{item.count} X {(item.price).toFixed(2)}</p>
                          </div>

                          <div className="float-right">
                            <button className= "btn btn-danger" size="sm" onClick={(e) => this.props.handleRemoveItem(e, item)}>X
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}

                  </ul>
                  <div className="clearfix">
                    <div className="float-left">
                      <b>Total</b>:
                    </div>
                    <div className="float-right">
                      ${(cartItems.reduce((a,c) => (a + c.price * c.count), 0)).toFixed(2)}
                    </div>
                  </div>


              </div>
            }
      </div>
    )
  }
}

export default CartItems
