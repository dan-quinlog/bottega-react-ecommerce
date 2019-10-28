import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopSearchBar from "./shop-searchbar";
import ShopProduct from './shop-product';

class Shop extends Component {
  componentDidMount() {
    //set header links
    //fetch shop products action creator
    //fetch navbar links
    //set navbar links
    //filter product with links

    // const headerLinks = [
    //   {
    //     _id: 0,
    //     title: "shop",
    //     path: "/shop"
    //   },
    //   {
    //     _id: 1,
    //     title: "logout",
    //     path: "/"
    //   }
    // ];

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

  render() {
    return (
      <div className="shop">
        {/* search bar
      product grid and componnents
      cart button */}
        <ShopSearchBar className="shop__search-bar" onSubmit={this.onSubmit} />
        <div className="shop__products">
          {this.props.filteredProducts.map(product => {
            return (
<<<<<<< HEAD
              <ShopProduct {...product} key={product._id} />
=======
              <ShopProduct {...product} key={product._ed} />
>>>>>>> 8823a74616ca66a7bd35e79fa4323611b2956905
            );
          })}
        </div>
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
