import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/views/Main";
import Login from "../pages/login/views/Login";
import SignUp from "../pages/login/views/SignUp";
import ListOfProducts from "../pages/main/views/ListOfProducts";
import { useContext } from "react";
import UserContext from "../context/userContext/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import AddEditProduct from "../pages/admin/views/AddEditProduct";
import ProductManagement from "../pages/admin/views/ProductManagement";
import PublicationWrapper from "../pages/main/components/PublicationWrapper";

const AppRouter = () => {
    //userContext   
    const userContext = useContext(UserContext);
    const { authenticated, loading, isAdmin } = userContext;

    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/nueva-cuenta" element={<SignUp />} />
            <Route exact path="/lista-Productos" element={<ListOfProducts />} />
            <Route exact path="/main/descripcion-producto/:id" element={<PublicationWrapper />} />
            {(!loading) ?
                <>
                    <Route element={<ProtectedRoute isAllowed={authenticated && isAdmin} />} >
                        <Route exact path="/agregar-producto" element={<AddEditProduct />} />
                        <Route exact path="/todos-Productos" element={<ProductManagement />} />

                    </Route>
                </> : <></>}
        </Routes>
    );
}

export default AppRouter;