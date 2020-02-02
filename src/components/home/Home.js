import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    // console.log(this.props)
    const { products } = this.props;
    return(
      <div className="container">
        home component
        <ProductList  products={products} />
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
