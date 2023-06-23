import { useState } from "react";

const UseImages = () => {
    //hook de imagen seleccionada 
    const [selectedImage, setSelectedImage] = useState("")
    const [images, setImages] = useState([])
    const isEmpty = (aField) => aField === "";

    //desabilita el boton de eliminar Imagen 
    const imageButtonDisabled = () => isEmpty(selectedImage)

    //selecciona una imagen del producto haciendo click
    const selectImage = (image) => setSelectedImage(image)

    const imageChange = (e) => setImages(images.concat(e.target.files[0]));
    
    const imagesDisabled = () => {    
        return images.length === 0
    } 

    const deleteImage = () => setImages(images.filter(image => image !== selectedImage))

    return {
        imagesDisabled,
        images,
        imageButtonDisabled,
        selectImage,
        imageChange,
        deleteImage,
        selectedImage,
        setImages
    };
}

export default UseImages;