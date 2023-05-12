import ProductSkeleton from "../components/ProductSkeleton";
import '../Styles.css';
import UseListProducts from "../hooks/UseListProducts";
import ProductItem from "../components/ProductItem";
import SnackBarContainer from "../../../snackbar/hooks/SnackBarContainer";
import UseContext from "../../../hooks/UseContext";
import { If, Else, Then } from "../components/CompoundComponentIfElse";
import Pagination from "../components/Pagination";

/*
************************************************************************************************
ESTA VISTA ES LA ENCARGADA DE MOSTRAR LA LISTA DE PRODUCTOS TRAE DE UseListProducts LOS SIGUIENTES HOOKS
A-pagesByRows MULTIPLICA LA PAGINA POR LA FILA
B- pagesByRowsPlusRows  MULTIPLICA LA PAGINA POR LA FILA + LA FILA

ADEMAS VIENE LOS CONTEXTS 
A- PRODUCTS  
B- LOADING EVALUA CUANDO ESTAN CARGADOS O NO LOS PRODUCTOS

ESTE COMPONENTE MANDA A LLAMAR A EL COMPONENTE IF THEN ELSE QUE SON LOS ENCARGADOS DE HACER EL IF DEL LOADING
TAMBIEN LLAMA A LA BARRA DE LA PAGINACION
EL SNACKBAR
************************************************************************************************
*/
const ListOfProducts = () => {
   const { pagesByRows, pagesByRowsPlusRows} = UseListProducts()
   const { loading, products } = UseContext()
   return (
      <div className="card_container_product_list">
         <h1>Productos</h1>
         <div className="card">
            <If value={loading}>
               <Then>
                  {products.slice(pagesByRows(), pagesByRowsPlusRows()).map(product => (
                     <ProductItem product={product} key={product._id} />
                  ))}
               </Then>
               <Else>
                  <ProductSkeleton cards={6} />
               </Else>
            </If>
            <Pagination />
         </div>
         <SnackBarContainer />

      </div>
   );
}

export default ListOfProducts;