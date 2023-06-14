import { Button } from "@mui/material";

import {useContext } from 'react';
import ImageContext from "../context/addEditContext";

const Images = () => {

    const imageContext = useContext(ImageContext);
    const { images, imageChange, selectedImage, selectImage } = imageContext;

    return (
        <>
            {/* SUBIR IMAGBEN */}
            <div className="product_item">
                <Button variant="contained" component="label" color="primary">
                    Subir
                    <input hidden accept="image/*" name="img" type="file" onChange={imageChange} />
                </Button>
            </div>
            {/* IMAGEN PREVIA */}
            <div className="product_item_col2">
                {
                    images.length ?
                        <div className="product_upload_img">
                            {
                                images.map((image, i) =>
                                    <div key={i} className={(selectedImage === image) ? "product_select_image" : null}>
                                        <Button onClick={() => selectImage(image)}>
                                            <img src={URL.createObjectURL(image)} alt="uploaded_image" className="addEdditProduct_img" />
                                        </Button>
                                    </div>
                                )
                            }
                        </div>
                        : <h3>No hay Imagenes seleccionadas</h3>
                }
            </div>
        </>

    );
}

export default Images;