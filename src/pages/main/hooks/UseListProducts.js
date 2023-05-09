import { useEffect, useState } from "react";
import UseContext from "../../../hooks/UseContext";

const UseListProducts = () => {

    const { products, getProducts, loading } = UseContext();

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

export default UseListProducts;