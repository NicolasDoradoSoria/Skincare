import { TablePagination } from "@mui/material";
import UseListProducts from "../hooks/UseListProducts";
import UseContext from "../../../hooks/UseContext";
/*
********************************
ESTE COMPOMNENTE REALIZA LA PAGINACION DE PRODUCT
ES LLAMMADO DESDE LISTPRODUCT

LA PAGINACION NECESITA 
A- LA PAGINA EN LA QUE ESTA ACTUALMENTE 
B- LA CANTIDAD DE PRODUCTOS
C- LA CANTIDAD DE PRODUCTOS QUE VA A TENER POR FILAS 
D- Y LOS EVENTOS PARA PODER CAMBIAR DE PAGINA
E- Y LOS PRODUCTOS

********************************
*/
const Pagination = () => {
   const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = UseListProducts()
   const { products } = UseContext()

    return (
        <div className="table_pagination_container">
            <TablePagination
                rowsPerPageOptions={[6, 12, 24]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        </div>
        );
}

export default Pagination;