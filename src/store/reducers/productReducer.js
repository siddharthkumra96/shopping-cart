import productsData from "../data/products";

export const ADD_NEW_PRODUCT = "ADD_PRODUCT";
export const REMOVE_EXISTING_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCT_QUANTITY = "ADD_PRODUCT_QUANTITY";
export const DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY";

let newProduct = null;

const productReducer = (state = productsData, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [...state, action.product];
    case REMOVE_EXISTING_PRODUCT:
      return state.filter((product) => action.product.id !== product.id);
    case ADD_PRODUCT_QUANTITY:
      newProduct = state.find((product) => product.id === action.productid);
      if (newProduct && newProduct.availableStock < newProduct.totalStock) {
        const newState = state.filter((product) => product.id !== newProduct.id);
        newProduct.availableStock += 1;
        return [...newState, newProduct];
      }
      return state;
    case DECREASE_PRODUCT_QUANTITY:
      newProduct = state.find((product) => product.id === action.productid);
      if (newProduct && newProduct.availableStock) {
        const newState = state.filter((product) => product.id !== newProduct.id);
        newProduct.availableStock -= 1;
        return [...newState, newProduct];
      }
      return state;
    default: return state;
  }
};
export default productReducer;
