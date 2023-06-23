import { useContext } from 'react'
import ProductContext from '../context/productsContext/ProductContext';
import SnackBarContext from '../context/snackbarContext/SnackbarContext';
import CategoryContext from '../context/categoryContext/CategoryContext';
import ImagesContext from '../context/imagesContext/imagesContext'
import FavoriteContext from '../context/favoriteContext/FavoriteContext';
function UseContext() {
    //productContext
    const productContext = useContext(ProductContext);
    const { getProducts, products, totalPages, searchProducts, loading, deleteProduct, addProduct, msg, getProduct, product, updateProduct } = productContext;

    //CategoryContext
    const categoryContext = useContext(CategoryContext)
    const { getCategory, categories } = categoryContext

    // context Snakbar
    const snackbarContext = useContext(SnackBarContext)
    const { openSnackbar } = snackbarContext

    // context Images
    const imagesContext = useContext(ImagesContext);
    const { getImages, images } = imagesContext;

    // favoriteContext  
    const favoriteContext = useContext(FavoriteContext);
    const { getFavoriteById, isFavorite } = favoriteContext;

    return {
        getFavoriteById,
        isFavorite,
        getImages,
        images,
        getProducts,
        getProduct,
        product,
        products,
        totalPages,
        searchProducts,
        loading,
        deleteProduct,
        addProduct,
        getCategory,
        categories,
        openSnackbar,
        msg,
        updateProduct
    }
}

export default UseContext