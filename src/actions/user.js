import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id
  };
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          description: "placeholder description text",
          price: "1.99",
          belongsTo: [0, 1]
        },
        quantity: 2
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Graph Database",
          description: "placeholder description text",
          price: "1.99",
          belongsTo: [0, 6]
        },
        quantity: 1
      }
    ]
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: "8.02",
        orderNumber: "109123dj",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      },
      {
        _id: 1,
        total: "84.02",
        orderNumber: "104w56hwe465h",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      },
      {
        _id: 2,
        total: "84.02",
        orderNumber: "1024gf23dj",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      },
      {
        _id: 3,
        total: "18.40",
        orderNumber: "1f042f24dj",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      },
      {
        _id: 4,
        total: "48.02",
        orderNumber: "1032q4g3qaj",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      },
      {
        _id: 5,
        total: "132.02",
        orderNumber: "10945gw35gj",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      },
      {
        _id: 6,
        total: "38.02",
        orderNumber: "1243f23dj",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      },
      {
        _id: 7,
        total: "28.02",
        orderNumber: "12353dj",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State"
        }
      }
    ]
  };
}
