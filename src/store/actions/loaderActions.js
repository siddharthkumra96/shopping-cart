import { SET_LOADER_FALSE, SET_LOADER_TRUE } from "../reducers/loaderReducer";

export const setLoaderFalse = () => ({
  type: SET_LOADER_FALSE,
});

export const setLoaderTrue = () => ({
  type: SET_LOADER_TRUE,
});
