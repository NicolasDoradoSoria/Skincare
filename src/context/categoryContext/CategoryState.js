import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import CategoryReducer from "./CategoryReducer";
import CategoryContext from "./CategoryContext";
import {
  GET_CATEGORY
} from "../../types";

const CategoryState = (props) => {
  const initialState = {
    categories: [],
    msg: null
  };

  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  // obtiene todas las categorias
  const getCategory = async () => {
    try {
      const result = await clienteAxios.get(`/api/category`);
      dispatch({
        type: GET_CATEGORY,
        payload: result.data
      });
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <CategoryContext.Provider
      value={{
        getCategory,
        categories: state.categories,
        selectedCategory: state.selectedCategory,
        msg: state.msg
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
}

export default CategoryState;
