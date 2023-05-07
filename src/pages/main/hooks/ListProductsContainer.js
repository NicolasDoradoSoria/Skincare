import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../context/productsContext/ProductContext";

const ListProductsContainer = () => {
    // context products
    const productsContext = useContext(ProductContext)
    const { products, getProducts, loading } = productsContext

    //hooks
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const handlePageChange = (event, newPage) => setPage(newPage);

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        products,
        loading,
        page,
        handleRowsPerPageChange,
        handlePageChange,
        rowsPerPage,
    }

}

export default ListProductsContainer;