import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopSearchBar from "./shop-searchbar";
import ShopProduct from './shop-product';
import ShopCart from './shop-cart';
import CartButton from './cart-button';

class Shop extends Component {

  constructor() {
    super()

    this.state = {
      showCart: true,
      cartButtonIcon: 'fas fa-times'
    }
  }
  
  
  componentDidMount() {

    const headerLinks = [
      {
        _id: 0,
        title: "Login",
        path: "/signin"
      }
    ];

    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();

    this.props.fetchShopProducts();
    this.props.filterProductsWithCategoryId(0);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, _id =>
        this.props.filterProductsWithCategoryId(_id)
      );
    }
    return true;
  }

  onSubmit = fields => {
    this.props.filterProductsWithQuery(fields);
  };

  handleAddToCart = () => {
    if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
      document.getElementById('shop-cart').classList.remove('cart-hidden');
      this.setState({cartButtonIcon: 'fas fa-cart-plus'});
    } else {
      document.getElementById('shop-cart').classList.add('cart-hidden');
      this.setState({cartButtonIcon: 'fas fa-times'});
    }
  }

  render() {
    return (
      <div className="shop">
        <ShopSearchBar className="shop__search-bar" onSubmit={this.onSubmit} />
        <div className="shop__products">
          {this.props.filteredProducts.map(product => {
            return (
              <ShopProduct {...product} key={product._id} />
            );
          })}
        </div>
        <CartButton className='shop__cart-button' icon={this.state.cartButtonIcon} onClick={this.handleAddToCart} />
        {this.state.showCart ? <ShopCart className='shop__cart' />: ''}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { categories, filteredProducts } = state.shop;
  return { categories, filteredProducts };
}

Shop = connect(
  mapStateToProps,
  actions
)(Shop);

export default Shop;
