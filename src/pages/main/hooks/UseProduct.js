import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const UseProduct = () => {
    const navigate = useNavigate()

    // ventana de dialogo de publicacion
    const [open, setOpen] = useState(false);

    // al hacer click en la imagen navega hacial el componente publication 
    const navigatePublication = (productId) => {
        navigate(`/main/descripcion-producto/${productId}`)}

    // esto hace que haga el efecto de progress y ademas activa el dialog
    const handleButtonClick = () => {
        setOpen(true)
       
    }

    const changeDialog = () => setOpen(false)

    return {
        open,
        navigatePublication,
        changeDialog,
        handleButtonClick,
    }
}

export default UseProduct;