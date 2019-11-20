import { ADD_PRODUCT, REMOVE_PRODUCT } from "../reducers/productReducer";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  }
};
export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product
  }
}