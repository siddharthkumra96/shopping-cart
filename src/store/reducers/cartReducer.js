export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const cartReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_TO_CART: if(state[action.productid]){
            let count = state[action.productid];
            count += 1;
            return { ...state, [action.productid]: count}
        }
        else {
            return {...state, [action.productid]: 1}
        } 
        case REMOVE_FROM_CART: if(state[action.productid]){
            let count = state[action.productid];
            count -= 1;
            if(count === 0){
                let newState = { ...state };
                delete newState[action.productid];
                return newState;
            }
            else {
                return  {
                    ...state, [action.productid]: count
                }
            }
        }
        return { ...state }
        default: return state;
    }
    return state;
}
export default cartReducer;
