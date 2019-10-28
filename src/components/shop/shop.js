import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

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

  render() {
    return (
      <div className="shop">
        {/* search bar
      product grid and componnents
      cart button */}
        <div className="shop__products">
          {this.props.filteredProducts.map(product => {
            return (
              <div key={product._id} className="shop-product">
                <div className="shop-product__title">{product.title}</div>
                <div className="shop-product__description">
                  {product.description}
                </div>
              </div>
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
