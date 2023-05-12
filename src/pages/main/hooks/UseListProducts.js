import { useEffect, useState } from "react";
import UseContext from "../../../hooks/UseContext";
/*
************************************************************************************************
ESTE CUSTOM HOOKS ES EL ENCARGADO DE LA LOGICA DE LISTOFRODUCTS EL MISMO CONTEIENE LOS SIGUIENTES USESTATE
TAMBIEN SE ENCARGA DE LA LOGICA DEL COMPONENETE PAGINATION

A- PAGE QUE ES PARA CAMBIAR DE PAGINA
B- ROWSPERPAGE QUE ES EL LIMITE POR PAGINA

LUEGO TIENE getProducts QUE VIENE DE UseContext


ESTE SE ENCARGA DE LA PAGINACION Y DE CARGAR LOS PRODUCTOS

************************************************************************************************
*/
const UseListProducts = () => {

    const { getProducts } = UseContext();

    //hooks
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const handlePageChange = (event, newPage) => setPage(newPage);

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const pagesByRows = () => {
        return page * rowsPerPage
    }

    const pagesByRowsPlusRows = () => {
        return pagesByRows() + rowsPerPage
    }
    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        page,
        handleRowsPerPageChange,
        handlePageChange,
        rowsPerPage,
        pagesByRows,
        pagesByRowsPlusRows
    }

}

export default UseListProducts;