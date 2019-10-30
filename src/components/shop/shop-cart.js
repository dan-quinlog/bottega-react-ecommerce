import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import CartProduct from './cart-product';

import history from '../../history';


function CartContent({ className, products }) {
  let count = products.length;
  let productsJSX = products.map(product => <CartProduct {...product} key={product._id} /> );
  return (
    <div className={`${className} cart-content`}>
      <div className="cart-content__title">Cart({count})</div>
      <div className="cart-content__products">{productsJSX}</div>
      <CartFooter className="cart-content__footer" products={products} />
    </div>
  );
}

function CartFooter({ className, products }) {
  let subtotal = 0;
  products.map(cartProduct => {
    subtotal += cartProduct.quantity * cartProduct.product.price;
  })
  return (
    <div className={`${className} cart-footer`}>
      <a onClick={() => history.push('/order/review')} className="cart-footer__checkout">Checkout</a>
      <div className="cart-footer__subtotal">Subtotal</div>
      <div className="cart-footer__price">${subtotal}</div>
    </div>
  );
}

class ShopCart extends Component {
  componentDidMount() {
    this.props.fetchCartProducts();
  }
  
  render() {
    const { className } = this.props;
    return (
      <div id='shop-cart' className={`${className} shop-cart cart-hidden`}>
        <CartContent
          className="shop-cart__content"
          products={this.props.cartProducts}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return{
    cartProducts
  }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;
