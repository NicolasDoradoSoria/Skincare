import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SnackBarContext from "../../../context/snackbarContext/SnackbarContext";
import UserContext from "../../../context/userContext/UserContext";

const LoginContainer = () => {
    const navigate = useNavigate();
    // hook de user
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // destroyoning del hook user
    const { email, password } = user;

    //userContext
    const userContext = useContext(UserContext);
    const { authenticated, msg, login } = userContext;

    // context Snakbar
    const snackbarContext = useContext(SnackBarContext)
    const { openSnackbar} = snackbarContext

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const loginButtonDisabled = () => {
        return isEmpty(email) || isEmpty(password);
    };

    const isEmpty = (aField) => {
        return aField === "";
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // manda los datos de usuario al userContext
        login({ email, password });
    };
    
    useEffect(() => {
        if (authenticated) {
            navigate("/")
        }

        if (msg) {
            openSnackbar(msg.msg, msg.category)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticated, msg]);
    return {
        changeInput,
        loginButtonDisabled,
        onSubmit,
    }

}

export default LoginContainer;