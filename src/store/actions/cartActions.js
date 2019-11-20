import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducers/cartReducer";
export const addProductToCart = (productid) => {
    return {
        type: ADD_TO_CART,
        productid
    }
}
export const removeProductFromCart = (productid) => {
    return {
        type: REMOVE_FROM_CART,
        productid
    }
}