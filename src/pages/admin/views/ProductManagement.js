import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { Box, Button, CircularProgress } from "@mui/material";
import Pagination from '../components/Pagination'
import ProductRow from "../components/ProductRow";
import '../Styles.css';
import UseProductManagement from '../hooks/UseProductManagement';
import ProductRowSkeleton from '../components/ProductRowSkeleton'
import SnackBarContainer from '../../../snackbar/hooks/SnackBarContainer'
import UseContext from '../../../hooks/UseContext';
import ProductManagementContext from '../context/ProductManagementContext';
import { useContext } from 'react';
import AddEditProduct from './AddEditProduct';
import ReusableDialog from '../../../components/ReusableDialog'

const ProductManagement = () => {
    const { gridClick, isGrid, sortProducts, searchProductsChange, onAddProductClick } = UseProductManagement()
    
    const { products, loading } = UseContext()

    const productManagementContext = useContext(ProductManagementContext);
    const { loadingProgress, open, changeDialog, setOpen, success } = productManagementContext;

    return (<>

        <div className="product_Management">

            <div className="app-container">
                <div className="app-content">
                    <div className="app-content-header">
                        <h1 className="app-content-headerText">Products</h1>
                        <Button variant="contained" color="primary" onClick={onAddProductClick}>Add Product</Button>
                    </div>
                    <div className="app-content-actions">
                        <input className="search-bar" placeholder="Buscar...." type="text" name="name" onChange={searchProductsChange} />
                        <div className="app-content-actions-wrapper">
                            <div className="filter-button-wrapper">
                                <button className="action-button filter jsFilter"><span>Filter</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" rokewidth="2" rokelinecap="round" rokelinejoin="round" className="feather feather-filter">
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                    </svg>
                                </button>
                                <div className="filter-menu">
                                    <label>Category</label>
                                    <select>
                                        <option>All Categories</option>
                                        <option>Furniture</option>
                                        <option>Decoration</option>
                                        <option>Kitchen</option>
                                        <option>Bathroom</option>
                                    </select>
                                    <label>Status</label>
                                    <select>
                                        <option>All Status</option>
                                        <option>Active</option>
                                        <option>Disabled</option>
                                    </select>
                                    <div className="filter-menu-buttons">
                                        <button className="filter-button reset">
                                            Reset
                                        </button>
                                        <button className="filter-button apply">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="action-button list active" onClick={gridClick}>
                                <MenuIcon sx={{ width: "20px", height: "20px" }} />
                            </button>
                            <button className="action-button grid" onClick={gridClick}>
                                <GridViewIcon sx={{ width: "20px", height: "20px" }} />
                            </button>
                        </div>
                    </div>
                    <div className={isGrid ? "products-area-wrapper gridView" : "products-area-wrapper tableView"}>
                        <div className="products-header">
                            <div className="product-cell image">
                                Nombre
                                <button className="sort-button" onClick={(e) => sortProducts(e, 1)} value="name">
                                    <VerticalAlignTopIcon value="name" />
                                </button>
                                <button className="sort-button" onClick={(e) => sortProducts(e, -1)} value="name">
                                    <VerticalAlignBottomIcon value="name" />
                                </button>
                            </div>
                            <div className="product-cell category">
                                Categoria
                                <button className="sort-button" onClick={(e) => sortProducts(e, 1)} value="category">
                                    <VerticalAlignTopIcon />
                                </button>
                                <button className="sort-button" onClick={(e) => sortProducts(e, -1)} value="category">
                                    <VerticalAlignBottomIcon />
                                </button>
                            </div>
                            <div className="product-cell status-cell">
                                Descripcion
                                <button className="sort-button" onClick={(e) => sortProducts(e, 1)} value="descripcion">
                                    <VerticalAlignTopIcon />
                                </button>
                                <button className="sort-button" onClick={(e) => sortProducts(e, -1)} value="descripcion">
                                    <VerticalAlignBottomIcon />
                                </button>
                            </div>
                            <div className="product-cell stock">
                                Stock
                                <button className="sort-button" onClick={(e) => sortProducts(e, 1)} value="stock">
                                    <VerticalAlignTopIcon />
                                </button>
                                <button className="sort-button" onClick={(e) => sortProducts(e, -1)} value="stock">
                                    <VerticalAlignBottomIcon />
                                </button>
                            </div>
                            <div className="product-cell price">
                                Price
                                <button className="sort-button" onClick={(e) => sortProducts(e, 1)} value="price">
                                    <VerticalAlignTopIcon />
                                </button>
                                <button className="sort-button" onClick={(e) => sortProducts(e, -1)} value="price">
                                    <VerticalAlignBottomIcon />
                                </button>
                            </div>
                            <div className="product-cell action">
                                Acciones
                                <button className="sort-button">
                                </button>
                            </div>
                        </div>
                        {!loading ?
                            products.map(product => (
                                <div className="products-row" key={product._id}>
                                    <ProductRow product={product} />
                                </div>
                            )) : <ProductRowSkeleton />
                        }


                    </div>
                </div>
                <Pagination />
            </div>
            <SnackBarContainer />
        </div>
        <ReusableDialog open={open} onClose={changeDialog} >
            {success ? <AddEditProduct open={open} setOpen={setOpen} /> : null}
        </ReusableDialog>
        {loadingProgress && (
            <div className='progress'>

                <Box className="box">
                    <CircularProgress color="inherit" />
                </Box>
            </div>
        )}

    </>
    );
}

export default ProductManagement;