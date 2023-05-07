import { useContext, useEffect, useState } from "react";
import CategoryContext from "../../../context/categoryContext/CategoryContext";
import UserContext from "../../../context/userContext/UserContext";
import { useNavigate } from "react-router-dom";

const NavbarContainer = () => {
  const navigate = useNavigate();

    // click en modo mobile para desplegar la barra de navegacion
    const [click, setClick] = useState(false)

    // hook de barra desplegable del admistrador
    const [dropdownAdmin, setDropdownAdmin] = useState(false)

    // hook de barra desplegable de la categoria
    const [dropdownCategory, setDropdownCategory] = useState(false)

    // category Context
    
    const categoryContext = useContext(CategoryContext)
    const { categories, getCategory } = categoryContext

    //userContext
    const userContext = useContext(UserContext);
    const { authenticatedUser, isAdmin, authenticated, signOff} = userContext;

    const handleClick = () => setClick(!click)

    // sirve para cuando paso el mouse por el menu despliegue administrador
    const onMouseEnterAdmin = () => (window.innerWidth < 960) ? setDropdownAdmin(false) : setDropdownAdmin(true)
    const onMouseLeaveAdmin = () => (window.innerWidth < 960) ? setDropdownAdmin(false) : setDropdownAdmin(false)

    // sirve para cuando paso el mouse por la categoria se despliegue el menu
    const onMouseEnterCategory = () => (window.innerWidth < 960) ? setDropdownCategory(false) : setDropdownCategory(true)
    const onMouseLeaveCategory = () => (window.innerWidth < 960) ? setDropdownCategory(false) : setDropdownCategory(false)
    
    // navega a login inciar secion
    const navigateToLogin = () => {
        navigate("login")
    }
    useEffect(() => {
        getCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        authenticatedUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [])

    return {
        click,
        handleClick,
        onMouseEnterAdmin,
        onMouseLeaveAdmin,
        onMouseLeaveCategory,
        onMouseEnterCategory,
        isAdmin,
        dropdownAdmin,
        categories,
        dropdownCategory,
        authenticated,
        signOff,
        navigateToLogin
    };
}

export default NavbarContainer;