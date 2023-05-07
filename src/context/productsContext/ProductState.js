import React, { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";

import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESSFUL,
  GET_PRODUCT_SEARCH_LOADING,
  GET_PRODUCT_SEARCH_SUCCESSFUL,
  PRODUCT_SUCCESSFUL,
  PRODUCT_ERROR,
  UPLOAD_PERCENTAGE,
  DELETE_PRODUCT,
  DELETE_MSG
} from "../../types";
import { getProductService, getProductsService, postAddProductService, postSearchProducts, deleteProductService } from "../../service/Products.service";

const ProductState = (props) => {

  const initialState = {
    products: [],
    loading: false,
    product: null,
    images: [],
    msg: null,
    totalPages: 1,
    pageCount: 0
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async (sortHeader) => {
    try {
      const result = await getProductsService(sortHeader)
      productsAxios(result)
    } catch (error) {
      console.log(error)
    }
  }


  const productsAxios = (result) => {
    dispatch({
      type: GET_PRODUCTS_LOADING,
      payload: result.data,
    })
    setTimeout(() => {
      dispatch({
        type: GET_PRODUCTS_SUCCESSFUL,
      })
    }, 5000)
  }

  const getProduct = async (id) => {
    try {
      const result = await getProductService(id)
      dispatch({
        type: GET_PRODUCT_SEARCH_LOADING,
        payload: result.data,
      })
      setTimeout(() => {
        dispatch({
          type: GET_PRODUCT_SEARCH_SUCCESSFUL,
        })
      }, 5000)

    } catch (error) {
      console.log(error)
    }
  }

  // agrega un producto
  const addProduct = async (productNew, newImages) => {
    try {
      const result = await postAddProductService(productNew, newImages, productPercentageUpload)
      dispatch({
        type: PRODUCT_SUCCESSFUL,
        payload: result.data
      });
    } catch (error) {
      console.log(error)
      const alert = {
        msg: error.response.data.msg,
        category: "error"
      }
      dispatch({
        type: PRODUCT_ERROR,
        payload: alert,
      });
    }
  };

  const productPercentageUpload = async (persentage) => {
    dispatch({
      type: UPLOAD_PERCENTAGE,
      payload: persentage
    })
  }

  const searchProducts = async (value) => {
    try {
      const result = await postSearchProducts({ name: value })
      productsAxios(result)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async (id) => {
    try {
      const result = await deleteProductService(id)
      dispatch({
        type: DELETE_PRODUCT,
        payload: result.data,
      });

      setTimeout(() => {
        dispatch({
          type: DELETE_MSG,
        })
      }, 5000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        images: state.images,
        totalPages: state.totalPages,
        pageCount: state.pageCount,
        getProducts,
        getProduct,
        addProduct,
        searchProducts,
        deleteProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
