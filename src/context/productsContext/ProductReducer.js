import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESSFUL,
  GET_PRODUCT_SEARCH_LOADING,
  GET_PRODUCT_SEARCH_SUCCESSFUL,
  PRODUCT_SUCCESSFUL,
  DELETE_MSG,
  PRODUCT_ERROR,
  DELETE_PRODUCT
} from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

  switch (action.type) {

    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        products: action.payload.products,
        loading: true,
        totalPages: action.payload.TOTAL_PAGES,
      };
    case GET_PRODUCT_SEARCH_LOADING:
      return {
        ...state,
        product: action.payload,
        // loading: true
      };

    case GET_PRODUCT_SEARCH_SUCCESSFUL:
    case GET_PRODUCTS_SUCCESSFUL:
      return {
        ...state,
        loading: false
      }
    case DELETE_PRODUCT:
    case PRODUCT_SUCCESSFUL:
      const alerts = {
        msg: action.payload.msg,
        category: "success",
      }
      return {
        ...state,
        loading: true,
        msg: alerts
      };
    case DELETE_MSG:
      return {
        ...state,
        loading: false,
        msg: null,
      }
    case PRODUCT_ERROR:
      return {
        ...state,
        msg: action.payload,
      }

    default:
      return state;
  }
};
