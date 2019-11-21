export const SET_LOADER_FALSE = "SET_LOADER_FALSE";
export const SET_LOADER_TRUE = "SET_LOADER_TRUE";

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case SET_LOADER_FALSE: return false;
    case SET_LOADER_TRUE: return true;
    default: return state;
  }
};
export default loaderReducer;
