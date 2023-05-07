import React, { useReducer} from 'react';
import ImagesContext from "./imagesContext";
import imagesReducer from "./imagesReducer";
import {
    GET_IMAGES
} from "../../types";
import clienteAxios from '../../config/axios';

const ImagesState = (props) => {
    const initialState = {
        images: [],
    };

    const [state, dispatch] = useReducer(imagesReducer, initialState);

   
    // obtener las multiples imagenes del carrousel
    const getImages = async () => {
        try {
            const result = await clienteAxios.get(`/api/images/getMultipleFiles`)
            dispatch({
                type: GET_IMAGES,
                payload: result.data,
              })
            
        } catch (error) {
            throw error
        }
    };

    return (
        <ImagesContext.Provider
            value={{
                images: state.images,
                getImages: getImages
            }}
        >
            {props.children}
        </ImagesContext.Provider>
    );
}

export default ImagesState;