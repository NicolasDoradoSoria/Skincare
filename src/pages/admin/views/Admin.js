import {ProductManagementState } from "../context/ProductManagementState";
import AddEditProduct from "./AddEditProduct";
import ProductManagement from "./ProductManagement";

const Admin = ({ children }) => {
    return (
            <ProductManagementState>
                {children}
            </ProductManagementState>
    );
}

Admin.AddEditProduct = AddEditProduct
Admin.ProductManagement = ProductManagement

export default Admin;