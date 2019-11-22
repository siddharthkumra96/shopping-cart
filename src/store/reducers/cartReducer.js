export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const cartReducer = (state = {}, action) => {
  const productId = action.productId || (action.product ? action.product.id : null);
  switch (action.type) {
    case ADD_TO_CART: if (state[productId]) {
      let { count } = state[productId];
      if (count < state[productId].availableStock) {
        count += 1;
        return { ...state, [productId]: { ...state[productId], count } };
      }
      return state;
    }
      return {
        ...state,
        [productId]: { count: 1, availableStock: action.product.availableStock, price: action.product.price },
      };

    case REMOVE_FROM_CART: if (state[productId]) {
      let { count } = state[productId];
      count -= action.count;
      if (count === 0) {
        const newState = { ...state };
        delete newState[productId];
        return newState;
      }
      return { ...state, [productId]: { ...state[productId], count } };
    }
      return state;

    default: return state;
  }
};
export default cartReducer;
