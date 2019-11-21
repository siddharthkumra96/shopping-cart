import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  loading: loaderReducer,
});

export default rootReducer;
