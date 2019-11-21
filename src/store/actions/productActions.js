import {
  ADD_NEW_PRODUCT, REMOVE_EXISTING_PRODUCT, ADD_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY,
} from "../reducers/productReducer";
import {
  setLoaderTrue, setLoaderFalse,
} from "./loaderActions";

export const addProduct = (product) => ({
  type: ADD_NEW_PRODUCT,
  product,
});
export const removeProduct = (product) => ({
  type: REMOVE_EXISTING_PRODUCT,
  product,
});
export const addProductQuantity = (productid) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ADD_PRODUCT_QUANTITY,
      productid,
    });
    dispatch(setLoaderFalse);
  }, 2000);
  dispatch(setLoaderTrue);
};
export const decreaseProductQuantity = (productid) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: DECREASE_PRODUCT_QUANTITY,
      productid,
    });
    dispatch(setLoaderFalse);
  }, 2000);
  dispatch(setLoaderTrue);
};
