import ImageContext from "./addEditContext";
import UseAddEditProduct from "../hooks/UseAddEditProduct";
import UseProductRow from "../hooks/UseProductRow";

export const AddEditState = ({ children }) => {
    const { imageChange, images, selectImage, selectedImage, productButtonDisabled,
        imageButtonDisabled, productSubmit, name, price, descripcion, originalPrice, categories,
        productChange, checkedOfferChange, checkedOffer,
        deleteImage, product } = UseAddEditProduct()

    const { loadingProgress, onClickEditProduct,
        open, setOpen, changeDialog, success} = UseProductRow()

    return (
        <ImageContext.Provider value={{
            images,
            imageChange,
            selectedImage,
            selectImage,
            productButtonDisabled,
            imageButtonDisabled,
            productSubmit, name, price, descripcion, originalPrice, categories,
            productChange, checkedOfferChange, checkedOffer,
            deleteImage,
            loadingProgress,
            onClickEditProduct,
            open,
            setOpen, changeDialog, success, product
        }}>
            {children}
        </ImageContext.Provider>
    )
}