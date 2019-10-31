import React, { Component } from 'react';

import { connect } from 'react-redux';

import { UnderlinedTitle, InfoTitle } from './info-help';

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    let subtotal = 0;
    let quantity = 0;
    this.props.cartProducts.map(cartProduct => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
      quantity += cartProduct.quantity;
    })
    const tax = (subtotal * 0.06).toFixed(2);
    const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle className='order-summary__title' title='Order Summary' />
        <InfoTitle className='order-summary__subtotal' title={`${quantity} stickers`} value={`$${subtotal}`}/>
        <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value={`$${tax}`}/>
        <InfoTitle className='order-summary__total info-title-green' title='Total' value={`$${total}`}/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts }
}

OrderSummary = connect(mapStateToProps)(OrderSummary)

export default OrderSummary;