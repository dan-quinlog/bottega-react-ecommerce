import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import headerNavbar from "./header-navbar-reducer";
import users from "./user-reducer";
import shop from "./shop-reducer";

const rootReducer = combineReducers({
  form,
  headerNavbar,
  users,
  shop
});

export default rootReducer;
