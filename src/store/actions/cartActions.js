import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducers/cartReducer";
import {
  setLoaderTrue, setLoaderFalse,
} from "./loaderActions";
import {
  addProductQuantity,
  decreaseProductQuantity,
} from "./productActions";

export const addProductToCart = (product) => (dispatch) => {
  setTimeout(() => {
    if (product.id) {
      dispatch(decreaseProductQuantity(product.id));
      dispatch({
        type: ADD_TO_CART,
        product,
      });
    } else {
      dispatch(decreaseProductQuantity(product));
      dispatch({
        type: ADD_TO_CART,
        productId: product,
      });
    }
    dispatch(setLoaderFalse());
  }, 2000);
  dispatch(setLoaderTrue());
};

export const removeProductFromCart = (productId) => (dispatch) => {
  setTimeout(() => {
    dispatch(addProductQuantity(productId));
    dispatch({
      type: REMOVE_FROM_CART,
      productId,
    });
    dispatch(setLoaderFalse());
  }, 2000);
  dispatch(setLoaderTrue());
};
