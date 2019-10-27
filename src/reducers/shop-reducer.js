import { SET_SHOP_CATEGORIES } from "../actions/types";

const INITIAL_STATE = {
  categories: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SHOP_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}
