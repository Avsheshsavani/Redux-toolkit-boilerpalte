import { setProducts, setStatus, STATUSES } from "../productSlice";
import { api } from "../../Api/api";

//Product List
export const productListApi = () => {
  return async (dispatch) => {
    let query = `/products`;
    dispatch(setStatus(STATUSES.LOADING))
    let response = await api(query, {}, "get");
    if (response && response.status === 200) {
          dispatch(setStatus(STATUSES.IDLE))
      dispatch(setProducts(response.data));
    } else {
        dispatch(setStatus(STATUSES.ERROR))
      dispatch(setProducts([]));
    }
  };
};
