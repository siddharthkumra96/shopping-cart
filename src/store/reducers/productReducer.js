import productsData from "../data/products";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const productReducer = (state = productsData, action) => {
    switch(action.type){
        case ADD_PRODUCT: 
                    return [...state, action.product]
        case REMOVE_PRODUCT: 
                    return state.filter((product) => action.product.id !== product.id);
        default: return state;
    }
    return state;
}
export default productReducer;