import { useContext } from 'react'
import ProductContext from '../../../context/productsContext/ProductContext';
import CategoryContext from '../../../context/categoryContext/CategoryContext';

function UseContext() {
    //productContext
    const productContext = useContext(ProductContext);
    const { getProducts, products,totalPages, searchProducts,loading, deleteProduct, addProduct, pageCount } = productContext;

    //CategoryContext
    const categoryContext = useContext(CategoryContext)
    const { getCategory, categories } = categoryContext

    return {
        getProducts,
        products,
        totalPages,
        searchProducts,
        loading,
        deleteProduct,
        addProduct,
        getCategory,
        categories,
        pageCount
    }
}

export default UseContext