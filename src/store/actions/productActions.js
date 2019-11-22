import {
  ADD_NEW_PRODUCT, REMOVE_EXISTING_PRODUCT, ADD_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY,
} from "../reducers/productReducer";

export const addProduct = (product) => ({
  type: ADD_NEW_PRODUCT,
  product,
});
export const removeProduct = (product) => ({
  type: REMOVE_EXISTING_PRODUCT,
  product,
});
export const addProductQuantity = (productid, count = 1) => ({
  type: ADD_PRODUCT_QUANTITY,
  productid,
  count,
});
export const decreaseProductQuantity = (productid) => ({
  type: DECREASE_PRODUCT_QUANTITY,
  productid,
});
