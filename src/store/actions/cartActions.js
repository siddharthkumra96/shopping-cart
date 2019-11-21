import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducers/cartReducer";
import {
  setLoaderTrue, setLoaderFalse,
} from "./loaderActions";

export const addProductToCart = (product) => (dispatch) => {
  setTimeout(() => {
    if (product.id) {
      dispatch({
        type: ADD_TO_CART,
        product,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        productId: product,
      });
    }
    dispatch(setLoaderFalse);
  }, 2000);
  dispatch(setLoaderTrue);
};

export const removeProductFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  productId,
});
