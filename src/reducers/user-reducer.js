import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
  AUTHENTICATE_USER
} from "../actions/types";

const INITIAL_STATE = {
  user: {},
  cartProducts: [],
  purchases: [],
  purchaseDetail: {
    _id: 0,
    total: 0,
    orderNumber: "23f2",
    orderDate: new Date().toDateString(),
    creditCard: "-0000",
    user: {
      name: "",
      shippingAddress: ""
    }
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      const { user } = action.payload;
      return {
        ...state,
        user
      }
    case ADD_CART_PRODUCT:
      let exists = false;
      const newCP = action.payload;
      let cartProducts = [];
      state.cartProducts.map(cartProduct => {
        if (cartProduct.product._id == newCP._id) {
          exists = true;
          cartProduct.quantity += 1;
        }
        cartProducts.push(cartProduct);
      });
      if (exists == false) {
        cartProducts.push({
          _id: state.cartProducts.length + 1,
          product: newCP,
          quantity: 1
        });
      }

      return {
        ...state,
        cartProducts: cartProducts
      };
    case SET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: action.payload
      };
    case SET_USER_PURCHASES:
      return {
        ...state,
        purchases: action.payload
      };
    case SET_PURCHASE_DETAIL:
      let purchaseDetail;
      state.purchases.map(purchase => {
        if (purchase._id == action.payload) {
          purchaseDetail = purchase;
        }
      });
      return {
        ...state,
        purchaseDetail
      };

    default:
      return state;
  }
}
