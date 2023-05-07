import { TablePagination } from "@mui/material";
import ProductSkeleton from "./ProductSkeleton";
import '../Styles.css';
import ListProductsContainer from "../hooks/ListProductsContainer";
import Product from "./Product";
import SnackBarContainer from "../../../snackbar/hooks/SnackBarContainer";

const ListOfProducts = () => {
   const {loading, products, page, rowsPerPage, handlePageChange, handleRowsPerPageChange} = ListProductsContainer() 

   return (
      <div className="card_container_product_list">
            <h1>Productos</h1>
         <div className="card">
            {!loading ?
               <>
                  {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(product => (
                     <Product product={product} key={product._id} />
                  ))}
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
               </>
               : <ProductSkeleton cards={6} />
            }
         </div>
         <SnackBarContainer />
         
      </div>
   );
}

export default ListOfProducts;