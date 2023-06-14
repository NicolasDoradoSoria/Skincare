import { AddEditState } from "../context/AddEditState";
import AddEditProduct from "./AddEditProduct";
import ProductManagement from "./ProductManagement";

const Admin = ({ children }) => {
    return (
        <>
            <AddEditState>
                {children}
            </AddEditState>
        </>
    );
}

Admin.AddEditProduct = AddEditProduct
Admin.ProductManagement = ProductManagement

export default Admin;