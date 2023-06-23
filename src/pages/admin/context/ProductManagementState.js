import ProductManagementContext from "./ProductManagementContext";
import UseAddEditProduct from "../hooks/UseAddEditProduct";
import UseProductRow from "../hooks/UseProductRow";

export const ProductManagementState = ({ children }) => {
    
    const { imageChange, images, selectImage, selectedImage, productButtonDisabled,
        imageButtonDisabled, productSubmit, name, price, descripcion, originalPrice, categories,
        productChange, checkedOfferChange, checkedOffer,
        deleteImage, product, category } = UseAddEditProduct()

    const { loadingProgress, onClickEditProduct,
        open, setOpen, changeDialog, success} = UseProductRow()

    return (
        <ProductManagementContext.Provider value={{
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
            setOpen, changeDialog, success, product,
            category
        }}>
            {children}
        </ProductManagementContext.Provider>
    )
}